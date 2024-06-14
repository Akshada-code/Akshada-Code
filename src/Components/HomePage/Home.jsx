import React, { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import Card from "./Card";
import Header from "../common/Header";
import Navbar from "../common/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const [allBoards, setAllBoards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleCreateBoard = () => {
    navigate("/boardBuilder");
  };

  const pageSize = 1;
  const token = localStorage.getItem("token");

  const fetchBoards = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://prymr-dev-backend.vercel.app/api/board/fetchUserFeed1?page=${page}&pageSize=${pageSize}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.data.hasMoreFollower === false) {
        const response = await fetch(
          `https://prymr-dev-backend.vercel.app/api/board/fetchUserFeed2?page=${page}&pageSize=${pageSize}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        if (data.data.data.length > 0) {
          setAllBoards((prevBoards) => [...prevBoards, ...data.data.data]);
          setHasMore(false);
          setLoading(false);
          return;
        }

      }

      if (data.data.hasMore === false) {
        setHasMore(false);
      }

      if (data.data.data.length > 0) {
        setAllBoards((prevBoards) => [...prevBoards, ...data.data.data]);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error fetching boards", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, [page]);

  const observer = useRef();
  const lastBoardElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      }, { threshold: 0.1 });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  if (!allBoards) {
    return <div className="text-pink-50">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="pt-16">
        {allBoards.map((board, index) => {
          if (allBoards.length === index + 1) {
            return <Card ref={lastBoardElementRef} key={board._id} board={board} />;
          } else {
            return <Card key={board._id} board={board} />;
          }
        })}
      </div>
      {loading && <div className="text-pink-50">Loading more...</div>}
      <Navbar />
    </>
  );
};

export default Home;
