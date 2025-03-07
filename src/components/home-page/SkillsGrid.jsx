// SkillsGrid.jsx

import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../store/ThemeContext";
import { useInView } from "../hooks/useInView";

/**
 * Renders skills (html, css, js etc) in a grid.
 */
const SkillsGrid = () => {
  const backgroundFill = '#ede5dd'
  const mainFill = '#051c26'
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [size, setSize] = useState('');

  useEffect(() => {
    const updateSize = () => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      setSize(isDesktop ? '100' : '80')
    };

    updateSize();
    window.addEventListener("resize", updateSize); // Update on resize

    return () => {
      window.removeEventListener("resize", updateSize); // Clean up
    };
  })

  const isSectionVisible = useInView(sectionRef, { threshold: 0.3 });
  if (isSectionVisible && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div ref={sectionRef} className="font-thin md:h-screen md:p-8 py-16 leading-relaxed text-white bg-dark-teal">
      <h1 className="text-center font-thin tracking-wide text-3xl py-4 md:py-16 mb-8 md:mb-0 md:pb-0 transition-opacity transition-transform ease-out"
          style={{
            opacity: hasAnimated ? 1 : 0,
            transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 1s ease-out, opacity 1s ease-out',
          }}
      >
        Skills.</h1>
      <div className="tracking-widest flex justify-center my-12 md:my-0 transition-opacity transition-transform ease-out"
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
        transition: 'transform 1s ease-out, opacity 1s ease-out',
      }}
      >
        <div className="md:w-2/3 md:py-16 md:px-0 rounded-3xl bg-transparent p-8 grid grid-cols-3 gap-4 gap-y-8 md:gap-y-16">
          <div className="flex flex-col items-center">
            <svg className="group" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 256 256">
              <rect width="256" height="256" fill={backgroundFill} rx="60"/>
              <path fill={mainFill} d="M48 38L56.6098 134.593H167.32L163.605 176.023L127.959 185.661L92.38 176.037L90.0012 149.435H57.9389L62.5236 200.716L127.951 218.888L193.461 200.716L202.244 102.655H85.8241L82.901 69.9448H205.041H205.139L208 38H48Z"/>
              <path fill={mainFill} d="M128 38H48L56.6098 134.593H128V102.655H85.8241L82.901 69.9448H128V38Z"/>
              <path fill={mainFill} d="M128 185.647L127.959 185.661L92.38 176.037L90.0012 149.435H57.9388L62.5236 200.716L127.951 218.888L128 218.874V185.647Z"/>
            </svg>
            <span className=" mt-2 text-sm">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="group" width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="256" height="256" rx="60" fill={backgroundFill}/>
              <path d="M53.7527 102.651L56.6155 134.593H128.096V102.651H53.7527Z" fill={mainFill}/>
              <path d="M128.095 38H127.985H48L50.9036 69.9423H128.095V38Z" fill={mainFill}/>
              <path d="M128.095 218.841V185.608L127.955 185.645L92.3813 176.04L90.1072 150.564H72.821H58.0425L62.5175 200.718L127.948 218.882L128.095 218.841Z" fill={mainFill}/>
              <path d="M167.318 134.593L163.61 176.019L127.985 185.635V218.866L193.468 200.718L193.948 195.321L201.454 111.229L202.233 102.651L208 38H127.985V69.9423H172.994L170.088 102.651H127.985V134.593H167.318Z" fill={mainFill}/>
            </svg>
            <span className="mt-2 text-sm">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
              <rect width="256" height="256" rx="60" fill={backgroundFill} />
              <path d="M67.31 213.93L86.9 202.08C90.68 208.78 94.12 214.45 102.37 214.45C110.27 214.45 115.26 211.35 115.26 199.33V117.53H139.31V199.67C139.31 224.58 124.71 235.93 103.4 235.93C84.15 235.93 72.98 225.96 67.31 213.93ZM152.38 211.35L171.97 200.01C177.13 208.43 183.83 214.62 195.68 214.62C205.65 214.62 212.01 209.64 212.01 202.76C212.01 194.51 205.48 191.59 194.48 186.78L188.47 184.2C171.11 176.82 159.6 167.54 159.6 147.95C159.6 129.9 173.35 116.15 194.83 116.15C210.12 116.15 221.12 121.48 229.02 135.4L210.29 147.43C206.17 140.04 201.7 137.12 194.83 137.12C187.78 137.12 183.31 141.59 183.31 147.43C183.31 154.65 187.78 157.57 198.09 162.04L204.1 164.61C224.55 173.38 236.07 182.31 236.07 202.42C236.07 224.07 219.05 235.93 196.2 235.93C173.86 235.93 159.43 225.27 152.38 211.35Z" fill={mainFill} />
            </svg>
            <span className="mt-2 text-sm">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill={backgroundFill} rx="60"/>
              <path fill={mainFill} d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z"/>
              <path fillRule="evenodd" stroke={mainFill} strokeWidth="8.911" d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z" clipRule="evenodd"/>
              <path fillRule="evenodd" stroke={mainFill} strokeWidth="8.911" d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z" clipRule="evenodd"/>
              <path fillRule="evenodd" stroke={mainFill} strokeWidth="8.911" d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z" clipRule="evenodd"/>
            </svg>
            <span className="mt-2 text-sm">React</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
              <rect width="256" height="256" fill={backgroundFill} rx="60" />
              <mask id="mask0" x="55" y="28" width="146" height="200" maskUnits="userSpaceOnUse">
              <path fill="#fff" d="M182.035 72.67C181.751 70.9857 180.55 69.5989 178.92 69.0732C177.289 68.5475 175.5 68.9705 174.28 70.1702L150.675 93.9185L131.973 58.5801C131.223 57.0665 129.676 56.1083 127.982 56.1083C126.288 56.1083 124.741 57.0665 123.991 58.5801L113.842 77.8969L88.1841 30.4003C86.1315 26.5369 80.3157 27.5596 79.6315 31.8775L55 189.366L121.026 226.295C125.181 228.568 130.213 228.568 134.368 226.295L200.964 189.366L182.035 72.67Z" />
                </mask>
            <g mask="url(#mask0)">
            <path fill={mainFill} d="M55 189.366L79.7455 31.8775C80.4297 27.5596 86.2455 26.5369 88.2981 30.4003L113.842 77.8969L123.991 58.5801C124.776 57.0744 126.337 56.1294 128.039 56.1294C129.742 56.1294 131.303 57.0744 132.087 58.5801L200.964 189.366H55Z" />
            <path fill={mainFill} d="M200.965 189.366L182.035 72.6702C181.752 70.9859 180.551 69.599 178.92 69.0734C177.289 68.5477 175.501 68.9706 174.281 70.1704L55.0005 189.366L121.027 226.296C125.182 228.568 130.214 228.568 134.369 226.296L200.965 189.366Z" />
              </g>
            </svg>
            <span className="mt-2 text-sm">Firebase</span>
          </div>
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill={backgroundFill} rx="60"/>
              <path fill={mainFill} fillRule="evenodd" d="M83 110C88.9991 86.0009 104.001 74 128 74C164 74 168.5 101 186.5 105.5C198.501 108.501 209 104.001 218 92C212.001 115.999 196.999 128 173 128C137 128 132.5 101 114.5 96.5C102.499 93.4991 92 97.9991 83 110ZM38 164C43.9991 140.001 59.0009 128 83 128C119 128 123.5 155 141.5 159.5C153.501 162.501 164 158.001 173 146C167.001 169.999 151.999 182 128 182C92 182 87.5 155 69.5 150.5C57.4991 147.499 47 151.999 38 164Z" clipRule="evenodd"/>
              <defs><linearGradient id="paint0_linear_2_119" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#32B1C1"/>
                <stop offset="1" stopColor="#14C6B7"/></linearGradient>
              </defs>
            </svg>
            <span className="mt-2 text-sm text-center">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="256" height="256" rx="60" fill={backgroundFill}/>
              <path d="M128.001 30C72.7791 30 28 74.7708 28 130.001C28 174.184 56.6533 211.668 96.3867 224.891C101.384 225.817 103.219 222.722 103.219 220.081C103.219 217.696 103.126 209.819 103.083 201.463C75.2631 207.512 69.3927 189.664 69.3927 189.664C64.8437 178.105 58.2894 175.032 58.2894 175.032C49.2163 168.825 58.9733 168.953 58.9733 168.953C69.0151 169.658 74.3026 179.258 74.3026 179.258C83.2217 194.546 97.6965 190.126 103.403 187.571C104.301 181.107 106.892 176.696 109.752 174.199C87.5405 171.67 64.1913 163.095 64.1913 124.778C64.1913 113.86 68.0977 104.939 74.4947 97.9362C73.4564 95.4175 70.0335 85.2465 75.4635 71.4722C75.4635 71.4722 83.8609 68.7845 102.971 81.7226C110.948 79.5069 119.502 78.3958 128.001 78.3577C136.499 78.3958 145.061 79.5069 153.052 81.7226C172.139 68.7845 180.525 71.4722 180.525 71.4722C185.968 85.2465 182.544 95.4175 181.505 97.9362C187.917 104.939 191.797 113.86 191.797 124.778C191.797 163.187 168.403 171.644 146.135 174.119C149.722 177.223 152.918 183.308 152.918 192.638C152.918 206.018 152.802 216.787 152.802 220.081C152.802 222.742 154.602 225.86 159.671 224.878C199.383 211.64 228 174.169 228 130.001C228 74.7708 183.227 30 128.001 30ZM65.4536 172.453C65.2333 172.95 64.4517 173.099 63.7396 172.758C63.0143 172.432 62.6069 171.754 62.8421 171.256C63.0574 170.744 63.8406 170.602 64.5643 170.945C65.2913 171.271 65.7053 171.955 65.4536 172.453ZM70.3725 176.842C69.8956 177.285 68.9633 177.079 68.3307 176.38C67.6766 175.683 67.554 174.751 68.0376 174.302C68.5294 173.86 69.4336 174.067 70.0893 174.764C70.7434 175.47 70.8709 176.395 70.3725 176.842ZM73.7471 182.458C73.1344 182.884 72.1325 182.485 71.5132 181.595C70.9004 180.706 70.9004 179.64 71.5264 179.212C72.1474 178.785 73.1344 179.169 73.762 180.052C74.373 180.956 74.373 182.023 73.7471 182.458ZM79.4542 188.962C78.9061 189.566 77.7386 189.404 76.8841 188.579C76.0098 187.773 75.7663 186.629 76.3161 186.024C76.8709 185.418 78.045 185.589 78.9061 186.407C79.7738 187.211 80.0387 188.364 79.4542 188.962ZM86.8301 191.157C86.5883 191.941 85.4639 192.297 84.3312 191.964C83.2002 191.621 82.46 190.704 82.6885 189.912C82.9237 189.124 84.053 188.753 85.194 189.109C86.3234 189.45 87.0652 190.361 86.8301 191.157ZM95.2242 192.089C95.2523 192.913 94.2919 193.597 93.1029 193.612C91.9073 193.639 90.9402 192.971 90.9269 192.16C90.9269 191.327 91.8659 190.65 93.0615 190.63C94.2505 190.607 95.2242 191.269 95.2242 192.089ZM103.47 191.773C103.613 192.577 102.787 193.404 101.606 193.624C100.445 193.836 99.3702 193.339 99.2229 192.541C99.0788 191.716 99.92 190.89 101.079 190.676C102.262 190.471 103.32 190.955 103.47 191.773Z" fill={mainFill}/>
            </svg>
            <span className="mt-2 text-sm">GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <svg width={size} height={size} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="256" height="256" rx="60" fill={backgroundFill}/>
              <path d="M227.088 57.6016L133.256 225.389C131.318 228.854 126.341 228.874 124.375 225.427L28.6823 57.6177C26.54 53.861 29.7524 49.3105 34.0096 50.0715L127.942 66.8613C128.541 66.9684 129.155 66.9674 129.754 66.8582L221.722 50.0955C225.965 49.3222 229.192 53.8374 227.088 57.6016Z" fill={mainFill}/>
              <path d="M172.687 28.0492L103.249 41.6554C102.107 41.879 101.262 42.8462 101.194 44.007L96.9221 116.148C96.8216 117.847 98.3821 119.166 100.04 118.783L119.373 114.322C121.182 113.905 122.816 115.498 122.445 117.317L116.701 145.443C116.314 147.336 118.092 148.954 119.94 148.393L131.881 144.765C133.732 144.203 135.511 145.826 135.119 147.721L125.991 191.9C125.42 194.664 129.096 196.171 130.629 193.801L131.653 192.219L188.235 79.2992C189.183 77.4085 187.549 75.2526 185.472 75.6534L165.573 79.494C163.703 79.8545 162.112 78.113 162.639 76.2834L175.628 31.2582C176.156 29.4255 174.559 27.6825 172.687 28.0492Z" fill={mainFill}/>
              <defs>
              <linearGradient id="paint0_linear_307_179" x1="26.3459" y1="44.075" x2="143.127" y2="202.673" gradientUnits="userSpaceOnUse">
              <stop stopColor={mainFill}/>
              <stop offset="1" stopColor={mainFill}/>
              </linearGradient>
              <linearGradient id="paint1_linear_307_179" x1="122.551" y1="31.7433" x2="143.676" y2="176.66" gradientUnits="userSpaceOnUse">
              <stop stopColor={mainFill}/>
              <stop offset="0.0833333" stopColor="#FFDD35"/>
              <stop offset="1" stopColor="#FFA800"/>
              </linearGradient>
              </defs>
            </svg>
            <span className="mt-2 text-sm">Vite</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsGrid;