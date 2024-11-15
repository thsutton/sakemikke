"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../contexts/LanguageContext";
import SpinningRings from "@/app/components/SpinniongRings";
import GradientBackground from "@/app/components/GradientbBackground";
import MobileLayout from "@/app/components/MobileLayout";

export default function WashokuQuiz() {
    const router = useRouter();
    const { t } = useLanguage();
    const [state, setState] = useState({
        currentQuestion: 0,
        answers: {},
        subQuestions: null,
    });

    const [buttonAnimations, setButtonAnimations] = useState([]);

    useEffect(() => {
        const currentQ = getCurrentQuestion();
        const animations = [
            "animate-float-1",
            "animate-float-2",
            "animate-float-3",
            "animate-float-4",
            "animate-float-5",
            "animate-float-6",
            "animate-float-7",
            "animate-float-8",
        ];

        const shuffledAnimations = [...animations]
            .sort(() => Math.random() - 0.5)
            .slice(0, currentQ.options.length);

        setButtonAnimations(shuffledAnimations);
    }, [state.currentQuestion]);

    const categories = [
        { value: "刺身", label: t.washoku.options.categories.sashimi },
        { value: "椀盛", label: t.washoku.options.categories.soup },
        { value: "焼き魚", label: t.washoku.options.categories.grilled },
        { value: "揚げ物", label: t.washoku.options.categories.fried },
        { value: "鍋", label: t.washoku.options.categories.nabe },
    ];

    const subQuestions = {
        刺身: [
            { value: "ぶり", label: t.washoku.options.sashimi.buri },
            { value: "サーモン", label: t.washoku.options.sashimi.salmon },
            { value: "ヒラメ", label: t.washoku.options.sashimi.hirame },
        ],
        椀盛: [
            { value: "潮仕立て", label: t.washoku.options.soup.shio },
            { value: "白味噌仕立て", label: t.washoku.options.soup.white },
            { value: "八丁味噌仕立て", label: t.washoku.options.soup.hatcho },
        ],
        焼き魚: [
            { value: "サバの塩焼き", label: t.washoku.options.grilled.saba },
            { value: "ブリの照り焼き", label: t.washoku.options.grilled.buri },
            { value: "鰆の西京焼き", label: t.washoku.options.grilled.sawara },
        ],
        揚げ物: [
            { value: "鶏の竜田揚げ", label: t.washoku.options.fried.chicken },
            { value: "とんかつ", label: t.washoku.options.fried.pork },
            { value: "アナゴの天ぷら", label: t.washoku.options.fried.anago },
        ],
        鍋: [
            { value: "寄せ鍋", label: t.washoku.options.nabe.yose },
            { value: "すき焼き", label: t.washoku.options.nabe.sukiyaki },
            { value: "ブリしゃぶ", label: t.washoku.options.nabe.buri },
        ],
    };

    const handleAnswer = (answer) => {
        const newAnswers = { ...state.answers };

        if (state.currentQuestion === 0) {
            newAnswers.category = answer;
            setState({
                currentQuestion: 1,
                answers: newAnswers,
                subQuestions: subQuestions[answer],
            });
        } else {
            newAnswers.specific = answer;
            router.push(
                `/quiz/washoku/result?c=${newAnswers.category}&s=${answer}`
            );
        }
    };

    const getCurrentQuestion = () => {
        if (state.currentQuestion === 0) {
            return {
                question: t.washoku.questions.category,
                options: categories,
                gradient: "from-purple-500 to-blue-500",
                border: "border-white",
            };
        } else {
            return {
                question: t.washoku.questions[state.answers.category],
                options: state.subQuestions,
                gradient: "from-blue-500 to-teal-500",
                border: "border-white",
            };
        }
    };

    const handleBack = () => {
        if (state.currentQuestion > 0) {
            const newAnswers = { ...state.answers };
            // 現在の質問に対応する回答を削除
            switch (state.currentQuestion - 1) {
                case 0:
                    delete newAnswers.category;
                    break;
                case 1:
                    delete newAnswers.specific;
                    break;
            }
            setState({
                currentQuestion: state.currentQuestion - 1,
                answers: newAnswers,
            });
        }
    };



    const currentQuestion = getCurrentQuestion();

    const getOffsetClass = (index, optionsLength) => {
        if (optionsLength === 5) {
            return index === 1 || index === 3 ? "translate-y-1/2" : "";
        } else if (optionsLength === 4) {
            return index === 1 || index === 3 ? "translate-y-1/2" : "";
        } else if (optionsLength === 3) {
            return index === 1 ? "translate-y-1/2" : "";
        } else if (optionsLength === 2) {
            return index === 1 ? "translate-y-1/2" : "";
        }
        return "";
    };

    // 選択肢の数に応じてコンテナのスタイルを決定する関数
    const getContainerStyle = (optionsLength) => {
        const baseStyle = "grid gap-6 lg:gap-0 xl:gap-4 w-full";
        switch (optionsLength) {
            case 2:
                return `${baseStyle} grid-cols-2  lg:grid-cols-2  max-w-[300px] sm:max-w-md lg:max-w-sm xl:max-w-md 2xl:max-w-lg`;
            case 3:
                return `${baseStyle} grid-cols-2 lg:grid-cols-3  max-w-[300px] sm:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl`;
            case 4:
                return `${baseStyle} grid-cols-2 lg:grid-cols-4  max-w-[300px] sm:max-w-md lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl`;
            case 5:
                return `${baseStyle} grid-cols-2 lg:grid-cols-5 max-w-[300px] sm:max-w-md lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl`;
            default:
                return `${baseStyle} grid-cols-1 max-w-5xl`;
        }
    };

    const customRings = [
        {
            color: "#fff",
            bgOpacity: 0.05,
            bgColor: "#fff",
            width: "100%",
            height: "90%",
            animation: "animate-spin-custom1",
        },
        {
            color: "#fff",
            bgOpacity: 0.05,
            bgColor: "#ffffff",
            width: "90%",
            height: "100%",
            animation: "animate-spin-custom2",
        },
        {
            color: "#fff",
            bgOpacity: 0.05,
            bgColor: "#fff",
            width: "105%",
            height: "95%",
            animation: "animate-spin-custom3",
        },
        {
            color: "#fff",
            bgOpacity: 0.05,
            bgColor: "#fff",
            width: "95%",
            height: "105%",
            animation: "animate-spin-custom4",
        },
    ];

    
    return (
        <div className="min-h-screen text-white flex flex-col">
            <GradientBackground />
            <main className="flex-1 flex flex-col items-center 2xl:justify-center px-4 pt-28 2xl:pt-0">
                <div className="w-full mx-auto space-y-12">
                    {/* Question Section */}
                    <div className="text-center mx-auto  max-w-2xl">
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-xl md:text-2xl lg:text-3xl  font-light tracking-wider">
                                {currentQuestion.question}
                            </h2>
                        </div>

                        <div className="h-2 bg-white rounded-full">
                            <div
                                className={`h-2 rounded-full transition-all duration-500 bg-gradient-to-r ${currentQuestion.gradient}`}
                                style={{
                                    width: `${((state.currentQuestion + 1) / 2) * 100}%`,
                                }}
                            />
                        </div>
                    </div>

                    {/* Options Section */}
                    <div className={`${getContainerStyle(currentQuestion.options.length)} mx-auto`}>
                        {currentQuestion.options.map((option, index) => (
                            <div
                            key={option.value}
                            className={`aspect-square w-full h-full  transition-all duration-300 hover:scale-105 ${getOffsetClass(
                                index,
                                currentQuestion.options.length
                            )}`}
                        >
                                <button
                                    onClick={() => handleAnswer(option.value)}
                                    className={`
                                        relative
                                        w-full
                                        h-full
                                        rounded-full
                                        flex flex-col items-center justify-center
                                        p-4 space-y-2
                                        text-lg font-light tracking-wide
                                        group
                                        transition-all duration-300 
                                        hover:scale-105
                                        ${buttonAnimations[index] || ""}
                                    `}
                                >
                                    <SpinningRings rings={customRings} />
                                    <span className="text-center z-10">
                                        {option.label}
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                    {/* BackButton */}
                    <div className="text-center pb-12 lg:pt-20 xl:pt-28">
                    {state.currentQuestion > 0 ? (
                            <button
                                onClick={handleBack}
                                className="border border-white px-4 py-2 translate-y-1/2 rounded-full hover:bg-opacity-20 transition-all duration-300"
                            >
                                ← 前の回答に戻る
                            </button>
                        ) : (
                            <button
                                onClick={() => router.push('/quiz/')}
                                className="border border-white px-4 py-2 translate-y-1/2 rounded-full hover:bg-opacity-20 transition-all duration-300"
                            >
                                ← 診断選択ページに戻る
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
