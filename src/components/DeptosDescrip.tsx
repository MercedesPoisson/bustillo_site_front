import React from "react";
import { useTranslation } from "react-i18next";
import { PiMountains } from "react-icons/pi";
import { BiWater } from "react-icons/bi";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { PiTelevision } from "react-icons/pi";

const DptosDesc = () => {
  const {t} = useTranslation("global");

  return (
    <div className="w-full max-w-4xl mx-4 sm:mx-auto font-spectral mt-14">
      <p className="text-l font-normal text-notblack text-center items-center">
        {t("dptosDesc.description")}
      </p>
      <div className="flex justify-center items-center mt-4 gap-8">
        <div className="flex flex-col items-center">
          <PiMountains className="text-firstblue font-bold text-4xl" />
          <p className="text-xs text-center">{t("dptosDesc.view1")}</p>
          <span className="text-xs text-center">{t("dptosDesc.mountain")}</span>
        </div>
        <div className="flex flex-col items-center ml-4">
          <BiWater className="text-firstblue font-bold text-4xl" />
          <p className="text-xs text-center">{t("dptosDesc.view2")}</p>
          <span className="text-xs text-center">{t("dptosDesc.lake")}</span>
        </div>

        <div className="flex flex-col items-center ml-4">
          <PiFlowerLotusDuotone className="text-firstblue font-bold text-4xl" />
          <p className="text-xs text-center">{t("dptosDesc.view3")}</p>
          <span className="text-xs text-center">{t("dptosDesc.garden")}</span>
        </div>

        <div className="flex flex-col items-center ml-4">
          <FaCarSide className="text-firstblue font-bold text-4xl" />
          <p className="text-xs text-center">{t("dptosDesc.parking")}</p>
          <span className="text-xs text-center">{t("dptosDesc.freep")}</span>
        </div>

        <div className="flex flex-col items-center ml-4">
          <IoWifi className="text-firstblue font-bold text-4xl" />
          <p className="text-xs text-center">{t("dptosDesc.wifi")}</p>
          <span className="text-xs text-center">{t("dptosDesc.free")}</span>
        </div>

        <div className="flex flex-col items-center ml-4">
          <PiTelevision className="text-firstblue font-bold text-4xl" />
          <p className="text-xs text-center">{t("dptosDesc.smart")}</p>
          <span className="text-xs text-center">{t("dptosDesc.tv")}</span>
        </div>
      </div>
    </div>
  );
};

export default DptosDesc;
