import React, { useContext } from "react";
import { assets } from "../../assets/assets.js";
import { Context } from "../../context/Context.jsx";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
    newChat
  } = useContext(Context);


  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  const handleSubmit = () => {
    if (input.length >= 5) {
      console.log("Gönderilen istem:", input);
      onSent();
    } else {
      alert("En az 5 karakter girmelisiniz!");
    }
  };

  const cardData = [
    {
      promptText: "Türkiye'de gezilebilecek en iyi 5 il nedir?",
      title: "Seyahat önerileri",
      iconSrc: assets.compass_icon,
    },
    {
      promptText: "Python ve C dilinin farkları kısaca nedir?",
      title: "Kod önerileri",
      iconSrc: assets.code_icon,
    },
    {
      promptText: "Menemen nasıl yapılır?",
      title: "Yemek tarifleri",
      iconSrc: assets.bulb_icon,
    },
    {
      promptText: "2 önemli ekonomi kuramı kısaca nedir?",
      title: "Ekonomi kavramları",
      iconSrc: assets.question_icon,
    },
  ];

  return (
    <div className="flex-1 min-h-screen pb-40 relative">
      <div className="flex align-items-center justify-between text-base p-5 text-[#585858]">
        <p className="text-xl">
          {" "}
          {/* eslint-disable-next-line */}
          <a href="#" onClick={()=>{
                        newChat()
                    }} >Gemini</a>
        </p>
        <img className="w-10 h-10 rounded-full" src={assets.y_image} alt="" />
      </div>
      <div className="main-container max-w-4xl mx-auto ">
        {!showResults ? (
          <>
            <div className="mt-5 text-6xl md:font-semibold text-[#c4c7c5] text-start mx-2 md:mx-0 font-base">
              <p>
                <span className="gradient-blue-red gemini-baslik">
                  Merhaba Yusuf,
                </span>
              </p>
              <p className="gemini-baslik">Bugün nasıl yardımcı olabilirim?</p>
            </div>
            <div className="grid lg:grid-cols-4 gap-2 mt-6 md:mt-16 max-w-6xl align-items-center grid-cols-2 mx-4 md:mx-0">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="md:w-52 md:h-52 bg-[#f0f4f9] rounded-lg cursor-pointer relative hover:bg-[#dde3ea] w-40 h-40"
                  onClick={() => handleCardClick(card.promptText)}
                >
                  <p className="text-black text-base text-start mx-4 mt-3">
                    {card.title}
                  </p>
                  <img
                    className="w-8 md:w-10 h-8 md:h-10 p-1 md:p-2 absolute bottom-3 right-3 rounded-full bg-white"
                    src={card.iconSrc}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="my-10 flex items-center gap-4">
              <img
                className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 rounded-full"
                src={assets.y_image}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5 text-base font-normal leading-relaxed">
              <img
                className="w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10  rounded-full"
                src={assets.gemini_icon}
                alt=""
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <p />
                  <h />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full m-auto max-w-4xl px-5 py-0">
          <div className="flex items-center justify-between bg-[#f0f4f9] rounded-full px-5 py-2">
            <input
              className="flex-1 bg-transparent outline-none p-2 text-lg border-0 text-black placeholder-gray-500"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Buraya bir istem girin"
            />
            <div className="flex items-center gap-3">
              <img
                className="w-6 cursor-pointer"
                src={assets.gallery_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.mic_icon}
                alt=""
              />
              <img
                className="w-6 cursor-pointer"
                src={assets.send_icon}
                alt=""
                onClick={handleSubmit}
              />
            </div>
          </div>
          <div className="text-xs font-light my-2 mx-auto text-center">
            <p>
              Gemini, kişiler de dahil olmak üzere farklı konular hakkında
              yanlış bilgiler gösterebilir. Bu nedenle, verdiği yanıtların doğru
              olup olmadığını kontrol edin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
