"use client";
import React, { useEffect, useState } from "react";
import chatbotButtons from "../../../../../static/chatbotbuttons";
import axios from "axios";

const Page = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [activeButton, setActiveButton] = useState("General");
  const [chatbotForm, setChatBotForm] = useState({
    chatbotName: "",
    welcomeMessage: "",
    placeholder: "",
    primaryColor: "#000000",
    fontColor: "#00FF00",
    fontSize: "",
    chatHeight: "",
    chatIconSize: "",
    positionOnScreen: "",
    distanceFromBottom: "",
    horizontalDistance: "",
    chatbotImage: "",
    owner: user._id
  });

  const [isAvailable, setAvailable] = useState(false)

  const handleChatbotFormChange = (e) => {
    const { id, value } = e.target;
    setChatBotForm((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    saveDetails();
  };


  const getDetails = async() => {
    try {
      const { data } = await axios.get(`/api/chatbot/${user._id}`); 

      if(data.createdChatbot === null){
        setAvailable(false); 
      }


      if(data.createdChatbot){
        setAvailable(true); 

        setChatBotForm({
          chatbotName: data.createdChatbot.chatbotName,
          welcomeMessage: data.createdChatbot.welcomeMessage,
          placeholder: data.createdChatbot.placeholder,
          primaryColor: data.createdChatbot.primaryColor,
          fontColor: data.createdChatbot.fontColor,
          fontSize: data.createdChatbot.fontSize,
          chatHeight: data.createdChatbot.chatHeight,
          chatIconSize: data.createdChatbot.chatIconSize,
          positionOnScreen: data.createdChatbot.positionOnScreen,
          distanceFromBottom: data.createdChatbot.distanceFromBottom,
          horizontalDistance: data.createdChatbot.horizontalDistance,
          chatbotImage: data.createdChatbot.chatbotImage,
          owner: user._id,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDetails(); 
  },[])


  const saveDetails = async () => {
    try {
      const { data } = await axios.post('/api/chatbot', chatbotForm);

      if (data) {
        setChatBotForm({
          chatbotName: data.createdChatbot.chatbotName,
          welcomeMessage: data.createdChatbot.welcomeMessage,
          placeholder: data.createdChatbot.placeholder,
          primaryColor: data.createdChatbot.primaryColor,
          fontColor: data.createdChatbot.fontColor,
          fontSize: data.createdChatbot.fontSize,
          chatHeight: data.createdChatbot.chatHeight,
          chatIconSize: data.createdChatbot.chatIconSize,
          positionOnScreen: data.createdChatbot.positionOnScreen,
          distanceFromBottom: data.createdChatbot.distanceFromBottom,
          horizontalDistance: data.createdChatbot.horizontalDistance,
          chatbotImage: data.createdChatbot.chatbotImage,
          owner: user._id,
        });
      } 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="max-w-screen-xl px-12 flex flex-col justify-center items-start gap-10 pt-10 pb-16">
      <p className="text-5xl text-primary font-bold">Configuration</p>
      <div className="flex w-full justify-start items-center border-b-2 border-[#DADADA]">
        {chatbotButtons.map((item, index) => (
          <button
            key={index}
            className={`text-black text-xl font-bold flex justify-center items-center py-3 px-4 ${activeButton === item ? "text-primary border-b-8 -mb-1 border-b-primary outline-none" : ""}`}
            onClick={() => setActiveButton(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {activeButton === "General" && (
        <form className="w-full flex flex-col justify-start items-start gap-3">
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="chatbotName" className="text-lg text-black font-bold">
              ChatBot Name
            </label>
            <input
              type="text"
              id="chatbotName"
              value={chatbotForm.chatbotName}
              onChange={handleChatbotFormChange}
              className="border border-black py-3 px-2 rounded-md"
            />
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="welcomeMessage" className="text-lg text-black font-bold">
              Welcome message
            </label>
            <input
              type="text"
              id="welcomeMessage"
              value={chatbotForm.welcomeMessage}
              onChange={handleChatbotFormChange}
              className="border border-black py-3 rounded-md px-2"
            />
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="placeholder" className="text-lg text-black font-bold">
              Input Placeholder
            </label>
            <input
              type="text"
              id="placeholder"
              value={chatbotForm.placeholder}
              onChange={handleChatbotFormChange}
              className="border border-black py-3 rounded-md px-2"
            />
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </form>
      )}

      {activeButton === "Display" && (
        <div className={`flex-col w-full gap-8 ${activeButton === "Display" ? "flex" : "hidden"}`}>
          <form className="w-full flex flex-col gap-8" onSubmit={handleFormSubmission}>
            <div className="w-full flex flex-col justify-center items-center gap-7 p-3">
              <div className="w-full flex justify-between items-center">
                <div className="w-1/2 flex flex-col justify-start items-start gap-2">
                  <label htmlFor="primaryColor" className="text-xl text-[#3C3C3C] font-bold">
                    Primary color
                  </label>
                  <div className="flex items-center gap-2 w-[80%]">
                    <input
                      type="text"
                      id="primaryColor"
                      value={chatbotForm.primaryColor}
                      onChange={handleChatbotFormChange}
                      className="w-full border h-12 border-black rounded-md px-2"
                    />
                    <input
                      type="color"
                      id="primaryColor"
                      value={chatbotForm.primaryColor}
                      onChange={handleChatbotFormChange}
                      className="h-12 border-none outline-none"
                    />
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-start gap-2">
                  <label htmlFor="fontColor" className="text-xl text-[#3C3C3C] font-bold">
                    Font color
                  </label>
                  <div className="flex items-center gap-2 w-[80%]">
                    <input
                      type="text"
                      id="fontColor"
                      value={chatbotForm.fontColor}
                      onChange={handleChatbotFormChange}
                      className="w-full border h-12 border-black rounded-md px-2"
                    />
                    <input
                      type="color"
                      id="fontColor"
                      value={chatbotForm.fontColor}
                      onChange={handleChatbotFormChange}
                      className="h-12 border-none outline-none"
                    />
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="w-1/2 flex flex-col justify-start items-start gap-2">
                  <label htmlFor="fontSize" className="text-xl text-[#3C3C3C] font-bold">
                    Font size
                  </label>
                  <div className="flex items-center gap-2 w-[80%]">
                    <select
                      id="fontSize"
                      value={chatbotForm.fontSize}
                      onChange={handleChatbotFormChange}
                      className="w-full border h-12 border-black rounded-md px-2"
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-start gap-2">
                  <label htmlFor="chatHeight" className="text-xl text-[#3C3C3C] font-bold">
                    Chat Height (in % of total screen)
                  </label>
                  <div className="flex items-center gap-2 w-[80%]">
                    <input
                      type="number"
                      id="chatHeight"
                      value={chatbotForm.chatHeight}
                      onChange={handleChatbotFormChange}
                      className="w-full border h-12 border-black rounded-md px-2"
                    />
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-1 bg-[#DADADA]"></div>
            <p className="text-2xl font-bold text-primary px-3">Chat Icon</p>
            <div className="w-full flex flex-col justify-center items-center gap-7 p-3">
              <div className="w-full flex justify-between items-center">
                <div className="w-1/2 flex flex-col justify-start items-start gap-2">
                  <label htmlFor="chatIconSize" className="text-xl text-[#3C3C3C] font-bold">
                    Chat Icon Size (in px)
                  </label>
                  <div className="flex items-center gap-2 w-[80%]">
                    <input
                      type="number"
                      id="chatIconSize"
                      value={chatbotForm.chatIconSize}
                      onChange={handleChatbotFormChange}
                      className="w-full border h-12 border-black rounded-md px-2"
                    />
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-start gap-2">
                  <label htmlFor="positionOnScreen" className="text-xl text-[#3C3C3C] font-bold">
                    Position on Screen
                  </label>
                  <div className="flex items-center gap-2 w-[80%]">
                    <select
                      id="positionOnScreen"
                      value={chatbotForm.positionOnScreen}
                      onChange={handleChatbotFormChange}
                      className="w-full border h-12 border-black rounded-md px-2"
                    >
                      <option value=""></option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="w-1/2 flex flex-col justify-start items-start gap-2">
                  <label htmlFor="distanceFromBottom" className="text-2xl text-[#3C3C3C] font-bold">
                    Distance from Bottom (in px)
                  </label>
                  <div className="flex items-center gap-2 w-[80%]">
                    <input
                      type="number"
                      id="distanceFromBottom"
                      value={chatbotForm.distanceFromBottom}
                      onChange={handleChatbotFormChange}
                      className="w-full border h-12 border-black rounded-md px-2"
                    />
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-start gap-2">
                  <label htmlFor="horizontalDistance" className="text-2xl text-[#3C3C3C] font-bold">
                    Horizontal Distance (in px)
                  </label>
                  <div className="flex items-center gap-2 w-[80%]">
                    <input
                      type="number"
                      id="horizontalDistance"
                      value={chatbotForm.horizontalDistance}
                      onChange={handleChatbotFormChange}
                      className="w-full border h-12 border-black rounded-md px-2"
                    />
                  </div>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
            <button className="w-[150px] text-white text-lg font-bold bg-primary px-5 py-3 rounded-md" type="submit">
              {isAvailable ? "Update" : "Save"}
            </button>
          </form>
          <div className="w-full ml-4">
            <p className="text-2xl text-[#3C3C3C] font-bold mb-2">
              Bot Icon
            </p>
            <div className="w-full flex justify-start items-center gap-3">
              <div className="h-[80px] w-[80px] bg-[#D9D9D9] rounded-full"></div>
              <button className="bg-primary px-4 py-3 flex justify-center items-start text-white font-bold rounded-lg">
                Upload Image
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
