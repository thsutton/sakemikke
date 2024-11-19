"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../contexts/LanguageContext";
import SpinningRings from "@/app/components/SpinniongRings";
import GradientBackground from "@/app/components/GradientbBackground";
import MobileLayout from "@/app/components/MobileLayout";

export default function BeginnerQuiz() {
    const router = useRouter();
    const { t } = useLanguage();
    const [state, setState] = useState({
        currentQuestion: 0,
        answers: {},
    });

    const [buttonAnimations, setButtonAnimations] = useState([]);

    const questions = [
        {
            question: t.beginner.questions.drink,
            gradient: "from-purple-500 to-blue-500",
            border: "border-white",
            options: [
                {
                    value: "ワイン",
                    label: t.beginner.options.drinks.wine,
                },
                {
                    value: "ビール",
                    label: t.beginner.options.drinks.beer,
                },
                {
                    value: "ハイボール",
                    label: t.beginner.options.drinks.highball,
                },
                {
                    value: "飲まない",
                    label: t.beginner.options.drinks.none,
                },
            ],
        },
        {
            question: t.beginner.questions.concern,
            gradient: "from-blue-500 to-teal-500",
            border: "border-white",
            options: [
                {
                    value: "甘い感じ",
                    label: t.beginner.options.concerns.sweet,
                },
                {
                    value: "辛口",
                    label: t.beginner.options.concerns.dry,
                },
                {
                    value: "お酒感",
                    label: t.beginner.options.concerns.alcohol,
                },
            ],
        },
        {
            question: t.beginner.questions.occasion,
            gradient: "from-teal-500 to-emerald-500",
            border: "border-white",
            options: [
                {
                    value: "リラックス時",
                    label: t.beginner.options.occasions.relax,
                },
                {
                    value: "食事と一緒に",
                    label: t.beginner.options.occasions.food,
                },
            ],
        },
    ];

    useEffect(() => {
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
            .slice(0, questions[state.currentQuestion].options.length);

        setButtonAnimations(shuffledAnimations);
    }, [state.currentQuestion]);

    const handleAnswer = (answer) => {
        const newAnswers = { ...state.answers };

        switch (state.currentQuestion) {
            case 0:
                newAnswers.drink = answer;
                break;
            case 1:
                newAnswers.concern = answer;
                break;
            case 2:
                newAnswers.occasion = answer;
                break;
        }

        const newState = {
            currentQuestion: state.currentQuestion + 1,
            answers: newAnswers,
        };

        if (state.currentQuestion === 2) {
            router.push(
                `/quiz/beginner/result?d=${newAnswers.drink}&c=${newAnswers.concern}&o=${newAnswers.occasion}`
            );
        } else {
            setState(newState);
        }
    };

    const handleBack = () => {
        if (state.currentQuestion > 0) {
            const newAnswers = { ...state.answers };
            // 現在の質問に対応する回答を削除
            switch (state.currentQuestion - 1) {
                case 0:
                    delete newAnswers.drink;
                    break;
                case 1:
                    delete newAnswers.concern;
                    break;
                case 2:
                    delete newAnswers.occasion;
                    break;
            }
            setState({
                currentQuestion: state.currentQuestion - 1,
                answers: newAnswers,
            });
        }
    };

    const currentQuestion = questions[state.currentQuestion];

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
                return `${baseStyle} grid-cols-2  lg:grid-cols-2  max-w-[220px] lg:max-h-[244px] sm:max-w-md lg:max-w-sm xl:max-w-md 2xl:max-w-lg`;
            case 3:
                return `${baseStyle} grid-cols-2 lg:grid-cols-3  max-w-[220px] lg:max-h-[244px] sm:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl`;
            case 4:
                return `${baseStyle} grid-cols-2 lg:grid-cols-4  max-w-[220px] lg:max-h-[244px] sm:max-w-md lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl`;
            case 5:
                return `${baseStyle} grid-cols-2 lg:grid-cols-5 max-w-[220px] lg:max-h-[244px] sm:max-w-md lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl`;
            default:
                return `${baseStyle} grid-cols-1 max-w-5xl`;
        }
    };

    const customRings = [
        {
            color: "#fff",
            bgOpacity: 0.05,
            bgColor: "#fffff",
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
            bgColor: "#ffffff",
            width: "105%",
            height: "95%",
            animation: "animate-spin-custom3",
        },
        {
            color: "#fff",
            bgOpacity: 0.05,
            bgColor: "#ffffff",
            width: "95%",
            height: "105%",
            animation: "animate-spin-custom4",
        },
    ];

    return (
        <div className="min-h-screen text-white flex flex-col">
            <GradientBackground />
            <main className="flex-1 flex flex-col items-center justify-center pt-16 px-4 lg:pt-0">
                <div className="w-full mx-auto flex flex-col justify-between lg:gap-12 h-[518px] sm:h-[870px] md:h-[880px] lg:h-[546px] xl:h-[584px] 2xl:h-[610px]">
                    {/* Question Section */}
                    <div className="text-center mx-auto w-full max-w-3xl">
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-light min-h-[calc(2em+1rem)] tracking-wider">
                                {currentQuestion.question}
                            </h2>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2  bg-white w-[90%] mx-auto rounded-full">
                        <div
                                className={`h-2 rounded-full transition-all duration-500 bg-gradient-to-r ${currentQuestion.gradient}`}
                                style={{
                                    width: `${
                                        ((state.currentQuestion + 1) /
                                            questions.length) *
                                        100
                                    }%`,
                                }}
                            />
                        </div>
                    </div>

                    {/* Options Section */}
                    <div
                        className={`${getContainerStyle(
                            currentQuestion.options.length
                        )} mx-auto`}
                    >
                        {currentQuestion.options.map((option, index) => (
                            <div
                                key={option.value}
                                className={`aspect-square w-full h-full transition-all duration-300 md:hover:scale-105 ${getOffsetClass(
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
                                        aspect-square
                                        rounded-full
                                        flex flex-col items-center justify-center
                                        p-4 space-y-2
                                        text-lg font-light tracking-wide
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
                    <div className="w-full flex justify-center translate-y-3/4 lg:mt-20">
                        {state.currentQuestion > 0 ? (
                            <button
                                onClick={handleBack}
                                className="border border-white px-4 py-2 rounded-full md:hover:bg-opacity-20 transition-all duration-300"
                            >
                                ← 前の回答に戻る
                            </button>
                        ) : (
                            <button
                                onClick={() => router.push("/quiz/")}
                                className="border border-white px-4 py-2 rounded-full md:hover:bg-opacity-20 transition-all duration-300"
                            >
                                ← 前のページに戻る
                            </button>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
