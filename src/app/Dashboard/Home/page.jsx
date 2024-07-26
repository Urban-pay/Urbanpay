import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main class="container flex items-center justify-center h-full text-center">
      <div
        className=" 
        relative w-[360px] h-[800px] bg-[#f4f4f4] overflow-hidden"
      >
        <div className="absolute top-[52px] left-[24px] inline-flex flex-col items-start gap-[4px]">
          <div className="text-[#000000] text-[16px] font-medium">
            Hello, Drey!
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="text-[#2b2b2b] text-[14px] font-normal">
              14958399049
            </div>
            <Image
              className="w-[24px] h-[24px]"
              src="assets/img/dashboard/charm-copy.svg"
              alt="Charm Copy Icon"
              width={24}
              height={24}
            />
          </div>
        </div>

        <div className="absolute top-[60px] left-[272px] inline-flex items-center justify-end gap-[10px]">
          <svg
            className="w-[18px] h-[19px]"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99919 5.33V7.8275M9.01419 2C6.25419 2 4.01919 4.235 4.01919 6.995V8.57C4.01919 9.08 3.80919 9.845 3.54669 10.28L2.59419 11.87C2.00919 12.8525 2.41419 13.9475 3.49419 14.3075C7.08015 15.5 10.9557 15.5 14.5417 14.3075C14.7783 14.2286 14.9942 14.0975 15.1733 13.9239C15.3525 13.7504 15.4904 13.5388 15.5768 13.3048C15.6631 13.0708 15.6959 12.8204 15.6725 12.572C15.6491 12.3237 15.5702 12.0838 15.4417 11.87L14.4892 10.28C14.2267 9.845 14.0167 9.0725 14.0167 8.57V6.995C14.0092 4.25 11.7592 2 9.01419 2Z"
              stroke="#070707"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M11.497 14.6152C11.497 15.9877 10.372 17.1127 8.99945 17.1127C8.31695 17.1127 7.68695 16.8277 7.23695 16.3777C6.78695 15.9277 6.50195 15.2977 6.50195 14.6152"
              stroke="#070707"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
          </svg>

          <svg
            className="w-[50px] h-[51px]"
            width="50"
            height="51"
            viewBox="0 0 50 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g filter="url(#filter0_d_3380_16528)">
              <rect
                x="10"
                y="6.5"
                width="30"
                height="30"
                rx="15"
                fill="#61DBB7"
              />
              <rect
                x="14.5"
                y="9"
                width="25"
                height="25"
                fill="url(#pattern0)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_3380_16528"
                x="0"
                y="0.5"
                width="50"
                height="50"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3380_16528"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3380_16528"
                  result="shape"
                />
              </filter>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_3380_16528"
                  transform="scale(0.000888889)"
                />
              </pattern>
            </defs>
          </svg>
        </div>

        <div className="absolute top-[144px] left-[89px] inline-flex flex-col items-center">
          <div className="inline-flex items-center gap-[1px] relative flex-none">
            <svg
              className="relative w-[25px] h-[25px]"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.29232 14.25V2.84583C3.29224 2.60346 3.37268 2.36793 3.52098 2.17623C3.66929 1.98454 3.87707 1.84753 4.11169 1.78673C4.34631 1.72593 4.59448 1.74478 4.81722 1.84032C5.03997 1.93586 5.22467 2.10268 5.34232 2.31458L11.659 13.6854C11.7766 13.8973 11.9613 14.0641 12.1841 14.1597C12.4068 14.2552 12.655 14.2741 12.8896 14.2133C13.1242 14.1525 13.332 14.0155 13.4803 13.8238C13.6286 13.6321 13.7091 13.3965 13.709 13.1542V1.75M1.20898 5.91667H15.7923M1.20898 10.0833H15.7923"
                stroke="#070707"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="relative text-[40px] font-bold text-[#070707] leading-normal tracking-[0.1px]">
              130,000
            </div>
          </div>
          <p className="relative text-[7px] font-normal text-[#707070] leading-normal tracking-[0.14px] mt-[-1px]">
            Tap the balance to switch wallet
          </p>
        </div>

        <div className="absolute top-[234px] left-[55px] inline-flex flex-col items-center gap-[14px]">
          <div className="inline-flex items-start gap-[20px] p-[2px] relative flex-none">
            <div className="inline-flex flex-col items-center gap-[3px] relative flex-none">
              <div className="flex w-[116px] h-[38px] items-center justify-center gap-[6px] p-[10px 20px] relative bg-white rounded-[8px] overflow-hidden border-[1.5px] border-transparent shadow-[inset_-3px_5px_4px_#7f39ef33,_inset_59px_-5px_8px_20px_#8039ef33] border-[linear-gradient(to_bottom,_rgb(188,_169,_230),_rgb(164,_231,_200))]">
                <Link
                  href="/Dashboard/addMoney"
                  className="flex items-center justify-center gap-[6px]"
                >
                  <svg
                    className="relative w-[15px] h-[15px]"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5625 7.5H12.0625M8.3125 11.25V3.75"
                      stroke="#222222"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link href="/Dashboard/addMoney" className="flex items-center">
                  <div className="relative text-[10px] font-normal text-[#000000] leading-[12px] whitespace-nowrap">
                    Add money
                  </div>
                </Link>
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[3px] relative flex-none">
              <div className="flex w-[116px] h-[38px] items-center justify-center gap-[6px] p-[10px 20px] relative bg-white rounded-[8px] border-[1.5px] border-transparent border-[linear-gradient(to_bottom,_rgb(188,_169,_230),_rgb(164,_231,_200))]">
                <a href="/Dashboard/sendMoney" className="flex items-center">
                  <svg
                    className="relative w-[15px] h-[15px]"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.31953 8.53232L8.55703 6.28857M4.62578 3.95107L9.93203 2.18232C12.3133 1.38857 13.607 2.68857 12.8195 5.06982L11.0508 10.3761C9.86328 13.9448 7.91328 13.9448 6.72578 10.3761L6.20078 8.80107L4.62578 8.27607C1.05703 7.08857 1.05703 5.14482 4.62578 3.95107Z"
                      stroke="#FF0404"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="/Dashboard/sendMoney" className="flex items-center">
                  <div className="relative text-[10px] font-normal text-[#FF0303] leading-[12px] whitespace-nowrap">
                    Send money
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-[3px] relative flex-none">
            <svg
              className="relative w-[16px] h-[15px]"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5625 7.5H12.0625M8.3125 11.25V3.75"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="relative text-[10px] font-medium text-[#222222] leading-[normal]">
              Add new wallet
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-3 absolute top-[356px] left-[25px]">
          <div className="inline-flex items-center gap-[188px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1px] font-medium text-[#222222] text-[12px] tracking-[-0.5px]">
              Quick Actions
            </div>
            <div className="relative w-fit font-medium text-[#606060] text-[10px] tracking-[0.1px]">
              View All
            </div>
          </div>
          <div class="">
            <div class="relative w-[312px] h-[54px]">
              <div class="relative h-[54px]">
                <div class="absolute top-0 left-0 flex items-start gap-[26px]">
                  <div class="relative flex flex-col items-start gap-[7px]">
                    <div class="relative w-[35px] h-[35px]">
                      <div class="relative flex items-start gap-[10px]">
                        <div class="relative w-[35px] h-[35px] bg-purple-700 rounded-full">
                          <svg
                            className="absolute w-[22px] h-[22px] top-[6px] left-[7px]"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.8071 14.6667V16.5C4.8071 16.7431 4.90368 16.9763 5.07558 17.1482C5.24749 17.3201 5.48065 17.4167 5.72377 17.4167H19.4738C19.7169 17.4167 19.95 17.3201 20.1219 17.1482C20.2939 16.9763 20.3904 16.7431 20.3904 16.5V9.16667C20.3904 8.92355 20.2939 8.69039 20.1219 8.51849C19.95 8.34658 19.7169 8.25 19.4738 8.25H18.3325V9.93163C18.4581 10.119 18.6279 10.2725 18.827 10.3786C19.0261 10.4847 19.2482 10.5401 19.4738 10.5398V15.125C19.1104 15.1271 18.7627 15.2728 18.5065 15.5305C18.2503 15.7881 18.1066 16.1367 18.1066 16.5H7.09647C7.09166 16.1387 6.94495 15.7939 6.68803 15.5399C6.43111 15.2859 6.08459 15.1431 5.72331 15.1424V14.6667H4.8071Z"
                              fill="white"
                            />
                            <path
                              d="M11.4577 9.16536C11.4577 9.65159 11.2645 10.1179 10.9207 10.4617C10.5769 10.8055 10.1106 10.9987 9.62435 10.9987C9.13812 10.9987 8.6718 10.8055 8.32799 10.4617C7.98417 10.1179 7.79102 9.65159 7.79102 9.16536C7.79102 8.67913 7.98417 8.21282 8.32799 7.869C8.6718 7.52519 9.13812 7.33203 9.62435 7.33203C10.1106 7.33203 10.5769 7.52519 10.9207 7.869C11.2645 8.21282 11.4577 8.67913 11.4577 9.16536Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.91667 4C2.67355 4 2.44039 4.09658 2.26849 4.26849C2.09658 4.44039 2 4.67355 2 4.91667V12.25C2 12.4931 2.09658 12.7263 2.26849 12.8982C2.44039 13.0701 2.67355 13.1667 2.91667 13.1667H16.6667C16.9098 13.1667 17.1429 13.0701 17.3148 12.8982C17.4868 12.7263 17.5833 12.4931 17.5833 12.25V4.91667C17.5833 4.67355 17.4868 4.44039 17.3148 4.26849C17.1429 4.09658 16.9098 4 16.6667 4H2.91667ZM4.29075 4.91667H15.2921C15.2925 5.28098 15.4375 5.63025 15.6952 5.88773C15.9529 6.14521 16.3024 6.28983 16.6667 6.28983V10.875C16.3033 10.8768 15.9554 11.0225 15.6992 11.2802C15.4429 11.5379 15.2992 11.8866 15.2995 12.25H4.28983C4.28526 11.8887 4.13862 11.5437 3.88165 11.2896C3.62468 11.0356 3.27802 10.8929 2.91667 10.8924V6.29167C3.09719 6.29167 3.27595 6.25609 3.44272 6.18698C3.60949 6.11787 3.76101 6.01658 3.88861 5.88888C4.01622 5.76119 4.11742 5.6096 4.18642 5.44279C4.25542 5.27597 4.29087 5.09719 4.29075 4.91667Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="relative flex flex-col items-start gap-[4px]">
                      <div class="relative w-fit mt-[-1px] font-poppins font-normal text-dark-500 text-[10px] tracking-[-0.05px] leading-[12px] whitespace-nowrap">
                        Pay bills
                      </div>
                    </div>
                  </div>
                  <div class="relative flex flex-col items-center gap-[7px]">
                    <div class="relative w-[35px] h-[35px] bg-[#078307] rounded-full"></div>
                    <div class="relative flex flex-col items-center gap-[4px]">
                      <div class="relative flex flex-col items-center gap-[4px]">
                        Transport
                      </div>
                    </div>
                  </div>
                  <div class="relative flex flex-col items-start gap-[7px]">
                    <div class="relative w-[35px] h-[35px] bg-[#1e1e1e] rounded-full">
                      <svg
                        class="absolute w-[22px] h-[22px] top-[6px] left-[7px]"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.54136 13.0838C1.75486 9.93775 1.36161 8.36567 2.18753 7.30783C3.01253 6.25 4.63503 6.25 7.87728 6.25H12.1214C15.3646 6.25 16.9853 6.25 17.8112 7.30783C18.6371 8.36475 18.2439 9.93867 17.4574 13.0838C16.9569 15.0848 16.7075 16.0849 15.9614 16.6679C15.2152 17.25 14.1839 17.25 12.1214 17.25H7.87728C5.81478 17.25 4.78352 17.25 4.03736 16.6679C3.29119 16.0849 3.04094 15.0848 2.54136 13.0838Z"
                          stroke="white"
                          stroke-width="1.5"
                        />
                        <path
                          d="M16.875 6.70768L16.2242 4.31977C15.973 3.39852 15.8474 2.93835 15.5898 2.59093C15.333 2.24577 14.9842 1.97988 14.5833 1.82368C14.18 1.66602 13.7033 1.66602 12.75 1.66602M3.125 6.70768L3.77583 4.31977C4.027 3.39852 4.15258 2.93835 4.41017 2.59093C4.667 2.24577 5.0158 1.97988 5.41667 1.82368C5.82 1.66602 6.29667 1.66602 7.25 1.66602"
                          stroke="white"
                          stroke-width="1.5"
                        />
                        <path
                          d="M7.25 1.66667C7.25 1.42355 7.34658 1.19039 7.51849 1.01849C7.69039 0.846577 7.92355 0.75 8.16667 0.75H11.8333C12.0764 0.75 12.3096 0.846577 12.4815 1.01849C12.6534 1.19039 12.75 1.42355 12.75 1.66667C12.75 1.90978 12.6534 2.14294 12.4815 2.31485C12.3096 2.48676 12.0764 2.58333 11.8333 2.58333H8.16667C7.92355 2.58333 7.69039 2.48676 7.51849 2.31485C7.34658 2.14294 7.25 1.90978 7.25 1.66667Z"
                          stroke="white"
                          stroke-width="1.5"
                        />
                        <path
                          d="M3.125 14.5L10 6.25M16.875 14.5L10.4583 6.70833M3.125 7.16667L10 17.25L16.875 7.16667"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="relative flex flex-col items-start gap-[4px]">
                      <div class="relative w-fit mt-[-1px] font-poppins font-normal text-dark-500 text-[10px] tracking-[-0.05px] leading-[12px] whitespace-nowrap">
                        Market
                      </div>
                    </div>
                  </div>
                  <div class="relative flex flex-col items-start gap-[7px]">
                    <div class="relative flex items-start gap-[10px]">
                      <div class="relative w-[35px] h-[35px] bg-[#d76802] rounded-full"></div>

                      <svg
                        class="absolute w-[22px] h-[22px] top-[6px] left-[7px]"
                        width="12"
                        height="20"
                        viewBox="0 0 12 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66071 0.572266C2.08766 0.572266 1.53807 0.799912 1.13286 1.20512C0.727646 1.61034 0.5 2.15992 0.5 2.73298V17.2687C0.5 17.8418 0.727646 18.3913 1.13286 18.7966C1.53807 19.2018 2.08766 19.4294 2.66071 19.4294H9.33929C9.91234 19.4294 10.4619 19.2018 10.8671 18.7966C11.2724 18.3913 11.5 17.8418 11.5 17.2687V2.73298C11.5 2.15992 11.2724 1.61034 10.8671 1.20512C10.4619 0.799912 9.91234 0.572266 9.33929 0.572266H2.66071ZM1.67857 2.73298C1.67857 2.19084 2.11857 1.75084 2.66071 1.75084H9.33929C9.88143 1.75084 10.3214 2.19084 10.3214 2.73298V17.2687C10.3214 17.8108 9.88143 18.2508 9.33929 18.2508H2.66071C2.11857 18.2508 1.67857 17.8108 1.67857 17.2687V2.73298ZM4.625 15.5008C4.46871 15.5008 4.31882 15.5629 4.20831 15.6734C4.0978 15.7839 4.03571 15.9338 4.03571 16.0901C4.03571 16.2464 4.0978 16.3963 4.20831 16.5068C4.31882 16.6173 4.46871 16.6794 4.625 16.6794H7.375C7.53129 16.6794 7.68118 16.6173 7.79169 16.5068C7.9022 16.3963 7.96429 16.2464 7.96429 16.0901C7.96429 15.9338 7.9022 15.7839 7.79169 15.6734C7.68118 15.5629 7.53129 15.5008 7.375 15.5008H4.625Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="relative flex flex-col items-start gap-[4px]">
                      <div class="relative w-fit mt-[-1px] font-poppins font-normal text-dark-500 text-[10px] tracking-[-0.05px] leading-[12px] whitespace-nowrap">
                        Airtime
                      </div>
                    </div>
                  </div>
                  <div class="relative flex flex-col items-center gap-[7px]">
                    <div class="relative w-[35px] h-[35px] bg-[#ae89fc] rounded-full">
                      <svg
                        class="absolute w-[22px] h-[22px] top-[6px] left-[7px]"
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5009 5.16716C15.5009 4.92405 15.4044 4.69089 15.2325 4.51898C15.0605 4.34707 14.8274 4.2505 14.5843 4.2505H3.96011L6.06844 2.15133C6.24105 1.97872 6.33803 1.74461 6.33803 1.5005C6.33803 1.25639 6.24105 1.02227 6.06844 0.849662C5.89583 0.67705 5.66172 0.580078 5.41761 0.580078C5.1735 0.580078 4.93939 0.67705 4.76677 0.849662L1.10011 4.51633C0.972914 4.64523 0.886751 4.80893 0.852491 4.98675C0.818231 5.16457 0.83741 5.34856 0.907608 5.5155C0.976377 5.6829 1.09316 5.8262 1.24323 5.92733C1.39331 6.02847 1.56997 6.08293 1.75094 6.08383H14.5843C14.8274 6.08383 15.0605 5.98725 15.2325 5.81534C15.4044 5.64343 15.5009 5.41028 15.5009 5.16716ZM19.0943 8.4855C19.0255 8.31809 18.9087 8.17479 18.7586 8.07366C18.6086 7.97252 18.4319 7.91806 18.2509 7.91716H5.41761C5.17449 7.91716 4.94134 8.01374 4.76943 8.18565C4.59752 8.35756 4.50094 8.59071 4.50094 8.83383C4.50094 9.07694 4.59752 9.3101 4.76943 9.48201C4.94134 9.65392 5.17449 9.75049 5.41761 9.75049H16.0418L13.9334 11.8497C13.8475 11.9349 13.7793 12.0363 13.7328 12.148C13.6863 12.2597 13.6623 12.3795 13.6623 12.5005C13.6623 12.6215 13.6863 12.7413 13.7328 12.853C13.7793 12.9647 13.8475 13.0661 13.9334 13.1513C14.0187 13.2372 14.12 13.3054 14.2317 13.352C14.3434 13.3985 14.4633 13.4225 14.5843 13.4225C14.7053 13.4225 14.8251 13.3985 14.9368 13.352C15.0485 13.3054 15.1499 13.2372 15.2351 13.1513L18.9018 9.48466C19.029 9.35576 19.1151 9.19206 19.1494 9.01424C19.1837 8.83642 19.1645 8.65243 19.0943 8.4855Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="relative flex flex-col items-center gap-[4px]">
                      <div class="relative w-fit mt-[-1px] font-poppins font-normal text-dark-500 text-[10px] tracking-[-0.05px] leading-[12px] whitespace-nowrap">
                        Exchange
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  class="absolute w-[22px] h-[22px] top-[6px] left-[80px]"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1643 5.66015C14.0805 3.88659 12.6019 2.38711 10.8438 1.27848C10.0315 0.76371 9.10565 0.455588 8.14693 0.381021C7.18822 0.306454 6.22582 0.467709 5.34377 0.850707C4.57224 1.21463 3.9009 1.76088 3.38771 2.44229C2.87452 3.1237 2.53491 3.9198 2.39821 4.76182C2.34932 5.04904 2.31266 5.32404 2.27599 5.59293C1.70383 5.68567 1.18325 5.9787 0.807142 6.41973C0.431036 6.86076 0.223884 7.42108 0.222656 8.00071V11.7468C0.222656 12.071 0.351426 12.3818 0.580637 12.6111C0.809848 12.8403 1.12072 12.969 1.44488 12.969V8.00071C1.44488 7.67655 1.57365 7.36568 1.80286 7.13647C2.03207 6.90725 2.34295 6.77848 2.6671 6.77848H14.1132C15.291 6.7801 16.4201 7.2487 17.2529 8.08153C18.0858 8.91436 18.5544 10.0435 18.556 11.2213V11.6674H17.3338C17.0757 11.038 16.5949 10.5257 15.9831 10.2282C15.3714 9.93069 14.6715 9.86884 14.0171 10.0544C13.3627 10.24 12.7995 10.6601 12.435 11.2345C12.0705 11.8088 11.9303 12.4973 12.041 13.1684C12.1518 13.8396 12.5058 14.4465 13.0354 14.8733C13.5651 15.3001 14.2334 15.517 14.9127 15.4825C15.5921 15.448 16.235 15.1646 16.7187 14.6864C17.2025 14.2081 17.4932 13.5685 17.5354 12.8896H18.556C18.8801 12.8896 19.191 12.7608 19.4202 12.5316C19.6494 12.3024 19.7782 11.9915 19.7782 11.6674V11.2213C19.7757 9.90244 19.3137 8.62571 18.4716 7.61073C17.6295 6.59576 16.46 5.90601 15.1643 5.66015ZM5.72266 5.55626H3.23543C3.23543 5.36682 3.29043 5.17126 3.3271 4.94515C3.43268 4.27382 3.70822 3.64065 4.12751 3.10584C4.54681 2.57102 5.09592 2.15234 5.72266 1.8896V5.55626ZM6.94488 5.55626V1.63293C8.08579 1.48477 9.24287 1.73518 10.2204 2.34182C11.5549 3.17304 12.7067 4.26662 13.606 5.55626H6.94488ZM14.7671 14.344C14.4649 14.344 14.1696 14.2544 13.9183 14.0866C13.6671 13.9187 13.4713 13.6801 13.3556 13.4009C13.24 13.1218 13.2097 12.8146 13.2687 12.5182C13.3276 12.2218 13.4731 11.9496 13.6868 11.736C13.9005 11.5223 14.1727 11.3768 14.469 11.3178C14.7654 11.2589 15.0726 11.2891 15.3518 11.4048C15.6309 11.5204 15.8695 11.7162 16.0374 11.9675C16.2053 12.2187 16.2949 12.5141 16.2949 12.8163C16.2949 13.2215 16.1339 13.61 15.8474 13.8966C15.5609 14.1831 15.1723 14.344 14.7671 14.344Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="">
            <div class="relative flex items-start gap-[194px]">
              <div class="relative flex flex-col items-start gap-[10px]">
                <div class="relative w-fit mt-[-1px] font-poppins font-medium text-dark-500 text-[12px] tracking-[-0.5px] leading-normal">
                  Transactions
                </div>
              </div>
              <div class="relative w-fit mt-[-1px] font-poppins font-medium text-[#606060] text-[10px] tracking-[0.1px] leading-normal">
                View All
              </div>
            </div>

            <div class="relative flex flex-col items-center gap-[15px]">
              <svg
                class="relative flex-0"
                width="96"
                height="78"
                viewBox="0 0 96 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5.5" cy="5" r="5" fill="#D9D9D9" />
                <rect x="15.5" width="80" height="10" rx="5" fill="#D9D9D9" />
                <circle cx="5.5" cy="22" r="5" fill="#D9D9D9" />
                <rect
                  x="15.5"
                  y="17"
                  width="80"
                  height="10"
                  rx="5"
                  fill="#D9D9D9"
                />
                <circle cx="5.5" cy="39" r="5" fill="#D9D9D9" />
                <rect
                  x="15.5"
                  y="34"
                  width="80"
                  height="10"
                  rx="5"
                  fill="#D9D9D9"
                />
                <circle cx="5.5" cy="56" r="5" fill="#D9D9D9" />
                <rect
                  x="15.5"
                  y="51"
                  width="80"
                  height="10"
                  rx="5"
                  fill="#D9D9D9"
                />
                <circle cx="5.5" cy="73" r="5" fill="#D9D9D9" />
                <rect
                  x="15.5"
                  y="68"
                  width="80"
                  height="10"
                  rx="5"
                  fill="#D9D9D9"
                />
              </svg>

              <p class="relative w-fit font-poppins font-medium text-[#606060] text-[10px] tracking-[0.1px] leading-normal">
                You have no transactions yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
