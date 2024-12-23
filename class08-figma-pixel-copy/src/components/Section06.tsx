"use client";
import { useState } from "react";
import HeadingBr from "./HeadingBr";
import Para from "./Para";
import { FiCheckCircle } from "react-icons/fi";

export default function Section06() {
  const [isActiveFree, setIsActiveFree] = useState(false);
  const [isActivePersonal, setIsActivePersonal] = useState(true);
  const [isActiveOrganization, setIsActiveOrganization] = useState(false);

  const eventHandlerFree = () => {
    if (isActiveFree == false) {
      setIsActiveFree(true);
      setIsActivePersonal(false);
      setIsActiveOrganization(false);
    } else {
      setIsActiveFree(true);
      setIsActivePersonal(false);
      setIsActiveOrganization(false);
    }
  };
  const eventHandlerPersonal = () => {
    if (isActivePersonal == false) {
      setIsActiveFree(false);
      setIsActivePersonal(true);
      setIsActiveOrganization(false);
    } else {
      setIsActiveFree(false);
      setIsActivePersonal(true);
      setIsActiveOrganization(false);
    }
  };
  const eventHandlerOrganization = () => {
    if (isActiveOrganization == false) {
      setIsActiveFree(false);
      setIsActivePersonal(false);
      setIsActiveOrganization(true);
    } else {
      setIsActiveFree(false);
      setIsActivePersonal(false);
      setIsActiveOrganization(true);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center gap-8 py-12 md:py-24 px-4 md:px-6 xl:px-8 2xl:px-44 bg-white text-center">
      <div className="flex flex-col justify-center items-center gap-5 w-full sm:w-[90%] md:w-[80%] lg:w-1/2">
        <HeadingBr
          headText="Choose Your Plan"
          headClass="text-[#212529] bg-[url('../../public/Shape.svg')] bg-no-repeat bg-[center_110%]"
        />
        <Para
          paraText="Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you."
          paraClass="text-[#212529]"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 lg:gap-6 my-6">
        <div
          className={
            isActiveFree
              ? "bg-[#043873] px-7 xl:px-9 py-10 rounded-xl border-[3px] border-[#346cb4] max-w-[400px] flex flex-col justify-start items-start gap-6 text-white shadow-lg scale-[103%] hover:scale-[103%] transition-all"
              : "bg-white px-7 xl:px-9 py-10 rounded-xl border-[3px] border-[#FFE492] max-w-[400px] lg:flex flex-col justify-start items-start gap-6 text-[#212529] shadow-lg hover:scale-[103%] transition-all hidden"
          }
          onClick={eventHandlerFree}
        >
          <div className="flex flex-col gap-5 text-left">
            <p className="font-semibold text-2xl">Free</p>
            <p
              className={
                isActiveFree
                  ? "font-bold text-4xl text-[#FFE492]"
                  : "font-bold text-4xl text-[#043873]"
              }
            >
              $0
            </p>
            <p className="font-medium text-lg">
              Capture ideas and find them quickly
            </p>
          </div>
          <div className="flex flex-col gap-4 text-left">
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveFree
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Sync unlimited devices
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveFree
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                10 GB monthly uploads
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveFree
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                200 MB max. note size
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveFree
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Customize Home dashboard and access extra widgets
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveFree
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Connect primary Google Calendar account
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveFree
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Add due dates, reminders, and notifications to your tasks
              </span>
            </p>
          </div>
          <button
            className={
              isActiveFree
                ? "font-semibold px-5 py-[10px] rounded-lg shadow-md text-white bg-[#4F9CF9] border-[3px] border-transparent hover:bg-[#A7CEFC] hover:text-[#043873]"
                : "font-semibold px-5 py-[10px] rounded-lg shadow-md text-[#212529] bg-white border-[3px] border-[#FFE492] hover:bg-[#043873] hover:text-white hover:border-[#346cb4]"
            }
            onClick={eventHandlerFree}
          >
            Get Started
          </button>
        </div>
        <div
          className={
            isActivePersonal
              ? "bg-[#043873] px-7 xl:px-9 py-10 rounded-xl border-[3px] border-[#346cb4] max-w-[400px] flex flex-col justify-start items-start gap-6 text-white shadow-lg scale-[103%] hover:scale-[103%] transition-all"
              : "bg-white px-7 xl:px-9 py-10 rounded-xl border-[3px] border-[#FFE492] max-w-[400px] lg:flex flex-col justify-start items-start gap-6 text-[#212529] shadow-lg hover:scale-[103%] transition-all hidden"
          }
          onClick={eventHandlerPersonal}
        >
          <div className="flex flex-col gap-5 text-left">
            <p className="font-semibold text-2xl">Personal</p>
            <p
              className={
                isActivePersonal
                  ? "font-bold text-4xl text-[#FFE492]"
                  : "font-bold text-4xl text-[#043873]"
              }
            >
              $11.99
            </p>
            <p className="font-medium text-lg">
              Capture ideas and find them quickly
            </p>
          </div>
          <div className="flex flex-col gap-4 text-left">
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActivePersonal
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Sync unlimited devices
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActivePersonal
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                10 GB monthly uploads
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActivePersonal
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                200 MB max. note size
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActivePersonal
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Customize Home dashboard and access extra widgets
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActivePersonal
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Connect primary Google Calendar account
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActivePersonal
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Add due dates, reminders, and notifications to your tasks
              </span>
            </p>
          </div>
          <button
            className={
              isActivePersonal
                ? "font-semibold px-5 py-[10px] rounded-lg shadow-md text-white bg-[#4F9CF9] border-[3px] border-transparent hover:bg-[#A7CEFC] hover:text-[#043873]"
                : "font-semibold px-5 py-[10px] rounded-lg shadow-md text-[#212529] bg-white border-[3px] border-[#FFE492] hover:bg-[#043873] hover:text-white hover:border-[#346cb4]"
            }
            onClick={eventHandlerPersonal}
          >
            Get Started
          </button>
        </div>
        <div
          className={
            isActiveOrganization
              ? "bg-[#043873] px-7 xl:px-9 py-10 rounded-xl border-[3px] border-[#346cb4] max-w-[400px] flex flex-col justify-start items-start gap-6 text-white shadow-lg scale-[103%] hover:scale-[103%] transition-all"
              : "bg-white px-7 xl:px-9 py-10 rounded-xl border-[3px] border-[#FFE492] max-w-[400px] lg:flex flex-col justify-start items-start gap-6 text-[#212529] shadow-lg hover:scale-[103%] transition-all hidden"
          }
          onClick={eventHandlerOrganization}
        >
          <div className="flex flex-col gap-5 text-left">
            <p className="font-semibold text-2xl">Organization</p>
            <p
              className={
                isActiveOrganization
                  ? "font-bold text-4xl text-[#FFE492]"
                  : "font-bold text-4xl text-[#043873]"
              }
            >
              $49.99
            </p>
            <p className="font-medium text-lg">
              Capture ideas and find them quickly
            </p>
          </div>
          <div className="flex flex-col gap-4 text-left">
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveOrganization
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Sync unlimited devices
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveOrganization
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                10 GB monthly uploads
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveOrganization
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                200 MB max. note size
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveOrganization
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Customize Home dashboard and access extra widgets
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveOrganization
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Connect primary Google Calendar account
              </span>
            </p>
            <p className="grid grid-cols-10 gap-6">
              <FiCheckCircle
                className={
                  isActiveOrganization
                    ? "text-lg text-[#FFE492] w-6 h-6 col-span-1"
                    : "text-lg text-[#4F9CF9] w-6 h-6 col-span-1"
                }
              />
              <span className="text-[16px] col-span-9">
                Add due dates, reminders, and notifications to your tasks
              </span>
            </p>
          </div>
          <button
            className={
              isActiveOrganization
                ? "font-semibold px-5 py-[10px] rounded-lg shadow-md text-white bg-[#4F9CF9] border-[3px] border-transparent hover:bg-[#A7CEFC] hover:text-[#043873]"
                : "font-semibold px-5 py-[10px] rounded-lg shadow-md text-[#212529] bg-white border-[3px] border-[#FFE492] hover:bg-[#043873] hover:text-white hover:border-[#346cb4]"
            }
            onClick={eventHandlerOrganization}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center gap-2 ">
        <button
          className={
            isActiveFree
              ? "h-4 w-4 rounded-full bg-[#043873]"
              : "h-3 w-3 rounded-full bg-[#4F9CF9]"
          }
          onClick={eventHandlerFree}
        ></button>
        <button
          className={
            isActivePersonal
              ? "h-4 w-4 rounded-full bg-[#043873]"
              : "h-3 w-3 rounded-full bg-[#4F9CF9]"
          }
          onClick={eventHandlerPersonal}
        ></button>
        <button
          className={
            isActiveOrganization
              ? "h-4 w-4 rounded-full bg-[#043873]"
              : "h-3 w-3 rounded-full bg-[#4F9CF9]"
          }
          onClick={eventHandlerOrganization}
        ></button>
      </div>
    </div>
  );
}
