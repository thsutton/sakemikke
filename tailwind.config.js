/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
    safelist: [
        "animate-float-1",
        "animate-float-2",
        "animate-float-3",
        "animate-float-4",
        "animate-float-5",
        "animate-float-6",
        "animate-float-7",
        "animate-float-8",
    ],
    theme: {
    	extend: {
    		fontFamily: {
    			shippori: [
    				'Shippori Mincho',
    				'serif'
    			]
    		},
    		screens: {
    			'3xs': '360px',
    			'2xs': '390px',
    			xs: '480px',
    			sm: '640px',
    			md: '768px',
    			lg: '1024px',
    			xl: '1280px',
    			'2xl': '1536px',
    			'3xl': '1920px'
    		},
    		width: {
    			'sake-details': '250px'
    		},
    		height: {
    			screen: [
    				'100vh',
    				'100dvh'
    			],
    			'sake-details-sm': '300px',
    			'sake-details-lg': '340px',
    			'sake-details-2xl': '370px'
    		},
    		minHeight: {
    			screen: [
    				'100vh',
    				'100dvh'
    			]
    		},
    		maxHeight: {
    			screen: [
    				'100vh',
    				'100dvh'
    			]
    		},
    		animation: {
    			fadeIn: 'fadeIn 0.5s ease-in forwards',
    			moveInCircle: 'moveInCircle 40s linear infinite',
    			moveInCircleReverse: 'moveInCircle 20s reverse infinite',
    			moveVertical: 'moveVertical 30s ease infinite',
    			moveHorizontal: 'moveHorizontal 40s ease infinite',
    			'float-1': 'float1 8s ease-in-out infinite',
    			'float-2': 'float2 9s ease-in-out infinite',
    			'float-3': 'float3 10s ease-in-out infinite',
    			'float-4': 'float4 9.5s ease-in-out infinite',
    			'float-5': 'float5 8.5s ease-in-out infinite',
    			'float-6': 'float6 10.5s ease-in-out infinite',
    			'float-7': 'float7 9.2s ease-in-out infinite',
    			'float-8': 'float8 8.8s ease-in-out infinite',
    			'spin-custom1': 'spinCustom1 6s linear infinite',
    			'spin-custom2': 'spinCustom2 10s linear infinite',
    			'spin-custom3': 'spinCustom3 5s linear infinite',
    			'spin-custom4': 'spinCustom4 15s linear infinite',
    			scrollLine: 'scrollLine 1.5s ease-in-out infinite'
    		},
    		keyframes: {
    			scrollLine: {
    				'0%': {
    					transform: 'translateY(-100%)'
    				},
    				'100%': {
    					transform: 'translateY(100%)'
    				}
    			},
    			fadeIn: {
    				'0%': {
    					opacity: '0'
    				},
    				'100%': {
    					opacity: '1'
    				}
    			},
    			moveInCircle: {
    				'0%': {
    					transform: 'rotate(0deg)'
    				},
    				'50%': {
    					transform: 'rotate(180deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			moveVertical: {
    				'0%': {
    					transform: 'translateY(-50%)'
    				},
    				'50%': {
    					transform: 'translateY(50%)'
    				},
    				'100%': {
    					transform: 'translateY(-50%)'
    				}
    			},
    			moveInCircleReverse: {
    				'0%': {
    					transform: 'rotate(360deg)'
    				},
    				'100%': {
    					transform: 'rotate(0deg)'
    				}
    			},
    			moveHorizontal: {
    				'0%': {
    					transform: 'translateX(-50%) translateY(-10%)'
    				},
    				'50%': {
    					transform: 'translateX(50%) translateY(10%)'
    				},
    				'100%': {
    					transform: 'translateX(-50%) translateY(-10%)'
    				}
    			},
    			float1: {
    				'0%, 100%': {
    					transform: 'translate(0px, 0px) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translate(20px, 16px) rotate(0.5deg)'
    				},
    				'66%': {
    					transform: 'translate(-8px, 15px) rotate(-0.5deg)'
    				}
    			},
    			float2: {
    				'0%, 100%': {
    					transform: 'translate(0px, 0px) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translate(-10px, 12px) rotate(-0.6deg)'
    				},
    				'66%': {
    					transform: 'translate(10px, 18px) rotate(0.6deg)'
    				}
    			},
    			float3: {
    				'0%, 100%': {
    					transform: 'translate(0px, 0px) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translate(15px, 12px) rotate(0.75deg)'
    				},
    				'66%': {
    					transform: 'translate(-10px, 20px) rotate(-0.75deg)'
    				}
    			},
    			float4: {
    				'0%, 100%': {
    					transform: 'translate(0px, 0px) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translate(-12px, 14px) rotate(-0.65deg)'
    				},
    				'66%': {
    					transform: 'translate(12px, 17.5px) rotate(0.65deg)'
    				}
    			},
    			float5: {
    				'0%, 100%': {
    					transform: 'translate(0px, 0px) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translate(10px, 15px) rotate(0.55deg)'
    				},
    				'66%': {
    					transform: 'translate(-12px, 19px) rotate(-0.55deg)'
    				}
    			},
    			float6: {
    				'0%, 100%': {
    					transform: 'translate(0px, 0px) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translate(-15px, 10px) rotate(-0.7deg)'
    				},
    				'66%': {
    					transform: 'translate(12px, 21px) rotate(0.7deg)'
    				}
    			},
    			float7: {
    				'0%, 100%': {
    					transform: 'translate(0px, 0px) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translate(12px, 12px) rotate(0.8deg)'
    				},
    				'66%': {
    					transform: 'translate(-8px, 17px) rotate(-0.8deg)'
    				}
    			},
    			float8: {
    				'0%, 100%': {
    					transform: 'translate(0px, 0px) rotate(0deg)'
    				},
    				'33%': {
    					transform: 'translate(-10px, 12px) rotate(-0.6deg)'
    				},
    				'66%': {
    					transform: 'translate(15px, 20px) rotate(0.6deg)'
    				}
    			},
    			spinCustom1: {
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			spinCustom2: {
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			spinCustom3: {
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			},
    			spinCustom4: {
    				'100%': {
    					transform: 'rotate(360deg)'
    				}
    			}
    		},
    		backgroundImage: {
    			'gradient-quiz': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
    			'gradient-lr': 'linear-gradient2(to left right, var(--tw-gradient-stops))'
    		},
    		backgroundSiz: {
    			auto: 'auto',
    			cover: 'cover',
    			contain: 'contain',
    			'90%': '90%',
    			'80%': '80%'
    		},
    		colors: {
    			quiz: {
    				primary: {
    					light: 'rgba(147, 51, 234, 0.2)',
    					DEFAULT: 'rgba(147, 51, 234, 0.3)',
    					dark: 'rgba(147, 51, 234, 0.4)'
    				},
    				secondary: {
    					light: 'rgba(59, 130, 246, 0.2)',
    					DEFAULT: 'rgba(59, 130, 246, 0.3)',
    					dark: 'rgba(59, 130, 246, 0.4)'
    				}
    			},
    			customRed: '#D6193E',
    			customBlue: '#0225CB',
    			customViolet: '#4F358A',
    			skyBlue1: '#00BBDA',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },

    plugins: [require("tailwindcss-animate")],
};
