import React, { useState, useRef, useEffect } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";
import { getUnpostedOrders } from "../../api/OrderRequests";
import { updateCoins } from "../../actions/CoinAction";
import Cart from "../../img/cart.png";

const PostShare = ({ onPostShare }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [descText, setDescText] = useState("");
  const [trendName, setTrendName] = useState("");
  const [orderLink, setOrderLink] = useState("");
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const fetchOrders = async () => {
    try {
      const response = await getUnpostedOrders(user._id);
      const fetchedOrders = response.data;
      setOrders(fetchedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedOrderId) {
      console.error("No order selected.");
      return;
    }

    if (!image) {
      alert("Please attach a snapshot of your order to share 🛍️");
      return;
    }

    if (!orderLink) {
      alert("Please provide the order link.");
      return;
    }
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      orderId: selectedOrderId,
      orderLink: orderLink, // Include the order link
    };

    if (trendName) {
      const hasHashtag = trendName.includes("#");
      if (hasHashtag) {
        const hashtagIndex = trendName.indexOf("#");
        const spaceIndex = trendName.indexOf(" ", hashtagIndex);
        const endIndex = spaceIndex !== -1 ? spaceIndex : trendName.length;
        setTrendName(trendName.substring(hashtagIndex, endIndex));
      } else {
        alert(
          "Please include a hashtag in your description to create a trend."
        );
        return;
      }
    }

    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;

      try {
        await dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await dispatch(uploadPost(newPost));
      await dispatch(updateCoins(user._id, 3));

      const updatedOrders = orders.filter(
        (order) => order._id !== selectedOrderId
      );
      setOrders(updatedOrders);

      resetShare();

      if (onPostShare) {
        onPostShare();
      }

      if (trendName) {
        createOrUpdateTrend(trendName);
      }

      // Fetch updated list of orders after successful post
      fetchOrders();
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  const createOrUpdateTrend = async (name) => {
    try {
      const response = await fetch("/trend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      console.log("Trend created:", data);
    } catch (error) {
      console.error("Error creating trend:", error);
    }
  };

  const resetShare = () => {
    setImage(null);
    setDescText("");
    setOrderLink("");
    desc.current.value = "";
    if (orders.length > 0) {
      setSelectedOrderId(orders[0]._id);
    } else {
      setSelectedOrderId("");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []); // Fetch orders once on component mount

  useEffect(() => {
    if (orders.length > 0) {
      setSelectedOrderId(orders[0]._id);
    } else {
      setSelectedOrderId("");
    }
  }, [orders]); // Update selected order ID when orders change

  const handleOrderChange = (event) => {
    const orderId = event.target.value;
    setSelectedOrderId(orderId);
  };

  const handleDescChange = (event) => {
    setDescText(event.target.value);
  };

  const handleOrderLinkChange = (event) => {
    setOrderLink(event.target.value);
  };

  if (orders.length === 0) {
    return (
      <div className="PostShare">
        <span className="no-orders">
          <h4>
            No orders to share yet!{" "}
            <a href="https://www.myntra.com/">
              <span>Start shopping</span>
            </a>
          </h4>
          <img src={Cart} alt="No orders available" width="50px" />
        </span>
      </div>
    );
  }

  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="Profile"
      />
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          required
          ref={desc}
          onChange={handleDescChange}
        />
        <input
          type="text"
          placeholder="Add a trend (optional, use #)"
          value={trendName}
          onChange={(e) => setTrendName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Add order link"
          value={orderLink}
          onChange={handleOrderLinkChange}
        />
        <select
          className="dropdown"
          value={selectedOrderId}
          onChange={handleOrderChange}
        >
          {orders.map((order) => (
            <option key={order._id} value={order._id} className="Orderoption">
              {order.items.join(", ")}
            </option>
          ))}
        </select>
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>

          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Uploading" : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
