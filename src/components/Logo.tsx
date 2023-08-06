/** @jsxImportSource theme-ui */
import React from "react"
import AGL from "../images/AGL.svg"
import AND from "../images/AND.gif"
import AUE from "../images/AUE.svg"
import B04 from "../images/B04.svg"
import BAK from "../images/BAK.png"
import BAY from "../images/BAY.svg"
import BFC from "../images/BFC.svg"
import BIE from "../images/BIE.svg"
import BOC from "../images/BOC.svg"
import BSC from "../images/BSC.svg"
import BVB from "../images/BVB.svg"
import CFC from "../images/CFC.svg"
import CHL from "../images/CHL.svg"
import CZJ from "../images/CZJ.svg"
import D98 from "../images/D98.svg"
import DRE from "../images/DRE.svg"
import DUI from "../images/DUI.svg"
import DÜS from "../images/DÜS.svg"
import EBS from "../images/EBS.svg"
import ECB from "../images/ECB.svg"
import EIL from "../images/EIL.gif"
import ERF from "../images/ERF.svg"
import ESS from "../images/ESS.png"
import FCA from "../images/FCA.svg"
import FCB from "../images/FCB.svg"
import FCH from "../images/FCH.svg"
import FCI from "../images/FCI.svg"
import FCK from "../images/FCK.svg"
import FCM from "../images/FCM.svg"
import FCN from "../images/FCN.svg"
import FCS from "../images/FCS.svg"
import FCU from "../images/FCU.svg"
import GFC from "../images/GFC.svg"
import GTL from "../images/GTL.png"
import H96 from "../images/H96.svg"
import HBS from "../images/HBS.svg"
import HFC from "../images/HFC.svg"
import HOF from "../images/HOF.svg"
import HSV from "../images/HSV.svg"
import JRE from "../images/JRE.svg"
import KIE from "../images/KIE.svg"
import KÖL from "../images/KÖL.svg"
import KSC from "../images/KSC.svg"
import L47 from "../images/L47.png"
import LKL from "../images/LKL.png"
import LUC from "../images/LUC.svg"
import LÜB from "../images/LÜB.svg"
import M05 from "../images/M05.svg"
import MGL from "../images/MGL.svg"
import MÜN from "../images/MÜN.svg"
import OLD from "../images/OLD.svg"
import OSN from "../images/OSN.png"
import P07 from "../images/P07.svg"
import POT from "../images/POT.svg"
import PMS from "../images/PMS.svg"
import RBL from "../images/RBL.svg"
import ROS from "../images/ROS.svg"
import RWE from "../images/RWE.svg"
import S04 from "../images/S04.svg"
import SAN from "../images/SAN.svg"
import SCF from "../images/SCF.svg"
import SCV from "../images/SCV.svg"
import SGE from "../images/SGE.svg"
import SGF from "../images/SGF.svg"
import STP from "../images/STP.png"
import SVB from "../images/SVB.svg"
import SVE from "../images/SVE.svg"
import SVM from "../images/SVM.svg"
import SVS from "../images/SVS.svg"
import SVW from "../images/SVW.svg"
import TBB from "../images/TBB.svg"
import UHA from "../images/UHA.svg"
import ULM from "../images/ULM.svg"
import VBL from "../images/VBL.svg"
import VfB from "../images/VfB.svg"
import VKÖ from "../images/VKÖ.svg"
import WIE from "../images/WIE.png"
import WMA from "../images/WMA.svg"
import WOB from "../images/WOB.svg"
import ZFC from "../images/ZFC.svg"
import ZWI from "../images/ZWI.svg"
import { getTeamName } from "../data/helpers"
import { ThemeUIStyleObject } from "theme-ui"

type Props = {
  code: string
}

const Logo = ({ code }: Props) => {
  const styles: ThemeUIStyleObject = {
    height: "18px!important",
    position: "relative",
    top: "2.5px"
  }
  const stylesUnion: ThemeUIStyleObject = {
    height: "16px!important",
    position: "relative",
    top: "3.5px"
  }
  switch (code) {
    case "AGL":
      return (
        <img
          src={AGL}
          alt={getTeamName("AGL")}
          title={getTeamName("AGL")}
          sx={styles}
        />
      )
    case "AND":
      return (
        <img
          src={AND}
          alt={getTeamName("AND")}
          title={getTeamName("AND")}
          sx={styles}
        />
      )
    case "AUE":
      return (
        <img
          src={AUE}
          alt={getTeamName("AUE")}
          title={getTeamName("AUE")}
          sx={styles}
        />
      )
    case "B04":
      return (
        <img
          src={B04}
          alt={getTeamName("B04")}
          title={getTeamName("B04")}
          sx={styles}
        />
      )
    case "BAK":
      return (
        <img
          src={BAK}
          alt={getTeamName("BAK")}
          title={getTeamName("BAK")}
          sx={styles}
        />
      )
    case "BAY":
      return (
        <img
          src={BAY}
          alt={getTeamName("BAY")}
          title={getTeamName("BAY")}
          sx={styles}
        />
      )
    case "BFC":
      return (
        <img
          src={BFC}
          alt={getTeamName("BFC")}
          title={getTeamName("BFC")}
          sx={styles}
        />
      )
    case "BIE":
      return (
        <img
          src={BIE}
          alt={getTeamName("BIE")}
          title={getTeamName("BIE")}
          sx={styles}
        />
      )
    case "BOC":
      return (
        <img
          src={BOC}
          alt={getTeamName("BOC")}
          title={getTeamName("BOC")}
          sx={styles}
        />
      )
    case "BSC":
      return (
        <img
          src={BSC}
          alt={getTeamName("BSC")}
          title={getTeamName("BSC")}
          sx={styles}
        />
      )
    case "BSC2":
      return (
        <img
          src={BSC}
          alt={getTeamName("BSC2")}
          title={getTeamName("BSC2")}
          sx={styles}
        />
      )
    case "BVB":
      return (
        <img
          src={BVB}
          alt={getTeamName("BVB")}
          title={getTeamName("BVB")}
          sx={styles}
        />
      )
    case "BVB2":
      return (
        <img
          src={BVB}
          alt={getTeamName("BVB2")}
          title={getTeamName("BVB2")}
          sx={styles}
        />
      )
    case "CFC":
      return (
        <img
          src={CFC}
          alt={getTeamName("CFC")}
          title={getTeamName("CFC")}
          sx={styles}
        />
      )
    case "CHL":
      return (
        <img
          src={CHL}
          alt={getTeamName("CHL")}
          title={getTeamName("CHL")}
          sx={styles}
        />
      )
    case "CZJ":
      return (
        <img
          src={CZJ}
          alt={getTeamName("CZJ")}
          title={getTeamName("CZJ")}
          sx={styles}
        />
      )
    case "D98":
      return (
        <img
          src={D98}
          alt={getTeamName("D98")}
          title={getTeamName("D98")}
          sx={styles}
        />
      )
    case "DRE":
      return (
        <img
          src={DRE}
          alt={getTeamName("DRE")}
          title={getTeamName("DRE")}
          sx={styles}
        />
      )
    case "DUI":
      return (
        <img
          src={DUI}
          alt={getTeamName("DUI")}
          title={getTeamName("DUI")}
          sx={styles}
        />
      )
    case "DÜS":
      return (
        <img
          src={DÜS}
          alt={getTeamName("DÜS")}
          title={getTeamName("DÜS")}
          sx={styles}
        />
      )
    case "EBS":
      return (
        <img
          src={EBS}
          alt={getTeamName("EBS")}
          title={getTeamName("EBS")}
          sx={styles}
        />
      )
    case "ECB":
      return (
        <img
          src={ECB}
          alt={getTeamName("ECB")}
          title={getTeamName("ECB")}
          sx={styles}
        />
      )
    case "EIL":
      return (
        <img
          src={EIL}
          alt={getTeamName("EIL")}
          title={getTeamName("EIL")}
          sx={styles}
        />
      )
    case "ERF":
      return (
        <img
          src={ERF}
          alt={getTeamName("ERF")}
          title={getTeamName("ERF")}
          sx={styles}
        />
      )
    case "ESS":
      return (
        <img
          src={ESS}
          alt={getTeamName("ESS")}
          title={getTeamName("ESS")}
          sx={styles}
        />
      )
    case "FCA":
      return (
        <img
          src={FCA}
          alt={getTeamName("FCA")}
          title={getTeamName("FCA")}
          sx={styles}
        />
      )
    case "FCB":
      return (
        <img
          src={FCB}
          alt={getTeamName("FCB")}
          title={getTeamName("FCB")}
          sx={styles}
        />
      )
    case "FCB2":
      return (
        <img
          src={FCB}
          alt={getTeamName("FCB2")}
          title={getTeamName("FCB2")}
          sx={styles}
        />
      )
    case "FCH":
      return (
        <img
          src={FCH}
          alt={getTeamName("FCH")}
          title={getTeamName("FCH")}
          sx={styles}
        />
      )
    case "FCI":
      return (
        <img
          src={FCI}
          alt={getTeamName("FCI")}
          title={getTeamName("FCI")}
          sx={styles}
        />
      )
    case "FCK":
      return (
        <img
          src={FCK}
          alt={getTeamName("FCK")}
          title={getTeamName("FCK")}
          sx={styles}
        />
      )
    case "FCM":
      return (
        <img
          src={FCM}
          alt={getTeamName("FCM")}
          title={getTeamName("FCM")}
          sx={styles}
        />
      )
    case "FCN":
      return (
        <img
          src={FCN}
          alt={getTeamName("FCN")}
          title={getTeamName("FCN")}
          sx={styles}
        />
      )
    case "FCS":
      return (
        <img
          src={FCS}
          alt={getTeamName("FCS")}
          title={getTeamName("FCS")}
          sx={styles}
        />
      )
    case "FCU":
      return (
        <img
          src={FCU}
          alt={getTeamName("FCU")}
          title={getTeamName("FCU")}
          sx={stylesUnion}
        />
      )
    case "GFC":
      return (
        <img
          src={GFC}
          alt={getTeamName("GFC")}
          title={getTeamName("GFC")}
          sx={styles}
        />
      )
    case "GTL":
      return (
        <img
          src={GTL}
          alt={getTeamName("GTL")}
          title={getTeamName("GTL")}
          sx={styles}
        />
      )
    case "H96":
      return (
        <img
          src={H96}
          alt={getTeamName("H96")}
          title={getTeamName("H96")}
          sx={styles}
        />
      )
    case "HBS":
      return (
        <img
          src={HBS}
          alt={getTeamName("HBS")}
          title={getTeamName("HBS")}
          sx={styles}
        />
      )
    case "HFC":
      return (
        <img
          src={HFC}
          alt={getTeamName("HFC")}
          title={getTeamName("HFC")}
          sx={styles}
        />
      )
    case "HOF":
      return (
        <img
          src={HOF}
          alt={getTeamName("HOF")}
          title={getTeamName("HOF")}
          sx={styles}
        />
      )
    case "HOF2":
      return (
        <img
          src={HOF}
          alt={getTeamName("HOF2")}
          title={getTeamName("HOF2")}
          sx={styles}
        />
      )
    case "HSV":
      return (
        <img
          src={HSV}
          alt={getTeamName("HSV")}
          title={getTeamName("HSV")}
          sx={styles}
        />
      )
    case "JRE":
      return (
        <img
          src={JRE}
          alt={getTeamName("JRE")}
          title={getTeamName("JRE")}
          sx={styles}
        />
      )
    case "KIE":
      return (
        <img
          src={KIE}
          alt={getTeamName("KIE")}
          title={getTeamName("KIE")}
          sx={styles}
        />
      )
    case "KÖL":
      return (
        <img
          src={KÖL}
          alt={getTeamName("KÖL")}
          title={getTeamName("KÖL")}
          sx={styles}
        />
      )
    case "KÖL2":
      return (
        <img
          src={KÖL}
          alt={getTeamName("KÖL2")}
          title={getTeamName("KÖL2")}
          sx={styles}
        />
      )
    case "KSC":
      return (
        <img
          src={KSC}
          alt={getTeamName("KSC")}
          title={getTeamName("KSC")}
          sx={styles}
        />
      )
    case "L47":
      return (
        <img
          src={L47}
          alt={getTeamName("L47")}
          title={getTeamName("L47")}
          sx={styles}
        />
      )
    case "LKL":
      return (
        <img
          src={LKL}
          alt={getTeamName("LKL")}
          title={getTeamName("LKL")}
          sx={styles}
        />
      )
    case "LUC":
      return (
        <img
          src={LUC}
          alt={getTeamName("LUC")}
          title={getTeamName("LUC")}
          sx={styles}
        />
      )
    case "LÜB":
      return (
        <img
          src={LÜB}
          alt={getTeamName("LÜB")}
          title={getTeamName("LÜB")}
          sx={styles}
        />
      )
    case "M05":
      return (
        <img
          src={M05}
          alt={getTeamName("M05")}
          title={getTeamName("M05")}
          sx={styles}
        />
      )
    case "MGL":
      return (
        <img
          src={MGL}
          alt={getTeamName("MGL")}
          title={getTeamName("MGL")}
          sx={styles}
        />
      )
    case "MÜN":
      return (
        <img
          src={MÜN}
          alt={getTeamName("MÜN")}
          title={getTeamName("MÜN")}
          sx={styles}
        />
      )
    case "OLD":
      return (
        <img
          src={OLD}
          alt={getTeamName("OLD")}
          title={getTeamName("OLD")}
          sx={styles}
        />
      )
    case "OSN":
      return (
        <img
          src={OSN}
          alt={getTeamName("OSN")}
          title={getTeamName("OSN")}
          sx={styles}
        />
      )
    case "P07":
      return (
        <img
          src={P07}
          alt={getTeamName("P07")}
          title={getTeamName("P07")}
          sx={styles}
        />
      )
    case "PMS":
      return (
        <img
          src={PMS}
          alt={getTeamName("PMS")}
          title={getTeamName("PMS")}
          sx={styles}
        />
      )
    case "POT":
      return (
        <img
          src={POT}
          alt={getTeamName("POT")}
          title={getTeamName("POT")}
          sx={styles}
        />
      )
    case "POT2":
      return (
        <img
          src={POT}
          alt={getTeamName("POT2")}
          title={getTeamName("POT2")}
          sx={styles}
        />
      )
    case "RBL":
      return (
        <img
          src={RBL}
          alt={getTeamName("RBL")}
          title={getTeamName("RBL")}
          sx={styles}
        />
      )
    case "ROS":
      return (
        <img
          src={ROS}
          alt={getTeamName("ROS")}
          title={getTeamName("ROS")}
          sx={styles}
        />
      )
    case "ROS2":
      return (
        <img
          src={ROS}
          alt={getTeamName("ROS")}
          title={getTeamName("ROS")}
          sx={styles}
        />
      )
    case "RWE":
      return (
        <img
          src={RWE}
          alt={getTeamName("RWE")}
          title={getTeamName("RWE")}
          sx={styles}
        />
      )
    case "S04":
      return (
        <img
          src={S04}
          alt={getTeamName("S04")}
          title={getTeamName("S04")}
          sx={styles}
        />
      )
    case "SAN":
      return (
        <img
          src={SAN}
          alt={getTeamName("SAN")}
          title={getTeamName("SAN")}
          sx={styles}
        />
      )
    case "SCF":
      return (
        <img
          src={SCF}
          alt={getTeamName("SCF")}
          title={getTeamName("SCF")}
          sx={styles}
        />
      )
    case "SCF2":
      return (
        <img
          src={SCF}
          alt={getTeamName("SCF2")}
          title={getTeamName("SCF2")}
          sx={styles}
        />
      )
    case "SCV":
      return (
        <img
          src={SCV}
          alt={getTeamName("SCV")}
          title={getTeamName("SCV")}
          sx={styles}
        />
      )
    case "SGE":
      return (
        <img
          src={SGE}
          alt={getTeamName("SGE")}
          title={getTeamName("SGE")}
          sx={styles}
        />
      )
    case "SGE2":
      return (
        <img
          src={SGE}
          alt={getTeamName("SGE2")}
          title={getTeamName("SGE2")}
          sx={styles}
        />
      )
    case "SGF":
      return (
        <img
          src={SGF}
          alt={getTeamName("SGF")}
          title={getTeamName("SGF")}
          sx={styles}
        />
      )
    case "STP":
      return (
        <img
          src={STP}
          alt={getTeamName("STP")}
          title={getTeamName("STP")}
          sx={styles}
        />
      )
    case "SVB":
      return (
        <img
          src={SVB}
          alt={getTeamName("SVB")}
          title={getTeamName("SVB")}
          sx={styles}
        />
      )
    case "SVE":
      return (
        <img
          src={SVE}
          alt={getTeamName("SVE")}
          title={getTeamName("SVE")}
          sx={styles}
        />
      )
    case "SVM":
      return (
        <img
          src={SVM}
          alt={getTeamName("SVM")}
          title={getTeamName("SVM")}
          sx={styles}
        />
      )
    case "SVS":
      return (
        <img
          src={SVS}
          alt={getTeamName("SVS")}
          title={getTeamName("SVS")}
          sx={styles}
        />
      )
    case "SVW":
      return (
        <img
          src={SVW}
          alt={getTeamName("SVW")}
          title={getTeamName("SVW")}
          sx={styles}
        />
      )
    case "TBB":
      return (
        <img
          src={TBB}
          alt={getTeamName("TBB")}
          title={getTeamName("TBB")}
          sx={styles}
        />
      )
    case "UHA":
      return (
        <img
          src={UHA}
          alt={getTeamName("UHA")}
          title={getTeamName("UHA")}
          sx={styles}
        />
      )
    case "ULM":
      return (
        <img
          src={ULM}
          alt={getTeamName("ULM")}
          title={getTeamName("ULM")}
          sx={styles}
        />
      )
    case "VBL":
      return (
        <img
          src={VBL}
          alt={getTeamName("VBL")}
          title={getTeamName("VBL")}
          sx={styles}
        />
      )
    case "VfB":
      return (
        <img
          src={VfB}
          alt={getTeamName("VfB")}
          title={getTeamName("VfB")}
          sx={styles}
        />
      )
    case "VKÖ":
      return (
        <img
          src={VKÖ}
          alt={getTeamName("VKÖ")}
          title={getTeamName("VKÖ")}
          sx={styles}
        />
      )
    case "WIE":
      return (
        <img
          src={WIE}
          alt={getTeamName("WIE")}
          title={getTeamName("WIE")}
          sx={styles}
        />
      )
    case "WMA":
      return (
        <img
          src={WMA}
          alt={getTeamName("WMA")}
          title={getTeamName("WMA")}
          sx={styles}
        />
      )
    case "WOB":
      return (
        <img
          src={WOB}
          alt={getTeamName("WOB")}
          title={getTeamName("WOB")}
          sx={styles}
        />
      )
    case "WOB2":
      return (
        <img
          src={WOB}
          alt={getTeamName("WOB2")}
          title={getTeamName("WOB2")}
          sx={styles}
        />
      )
    case "ZFC":
      return (
        <img
          src={ZFC}
          alt={getTeamName("ZFC")}
          title={getTeamName("ZFC")}
          sx={styles}
        />
      )
    case "ZWI":
      return (
        <img
          src={ZWI}
          alt={getTeamName("ZWI")}
          title={getTeamName("ZWI")}
          sx={styles}
        />
      )
    default:
      return <span sx={styles}>{code}</span>
  }
}

export default Logo
