/** @jsxImportSource theme-ui */
import React from 'react'
import B04 from "../images/B04.svg"
import BIE from "../images/BIE.svg"
import BOC from "../images/BOC.svg"
import BSC from "../images/BSC.svg"
import BVB from "../images/BVB.svg"
import D98 from "../images/D98.svg"
import DÜS from "../images/DÜS.svg"
import EBS from "../images/EBS.svg"
import FCA from "../images/FCA.svg"
import FCB from "../images/FCB.svg"
import FCH from "../images/FCH.svg"
import FCK from "../images/FCK.svg"
import FCM from "../images/FCM.svg"
import FCN from "../images/FCN.svg"
import FCU from "../images/FCU.svg"
import H96 from "../images/H96.svg"
import HOF from "../images/HOF.svg"
import HSV from "../images/HSV.svg"
import JRE from "../images/JRE.svg"
import KIE from "../images/KIE.svg"
import KÖL from "../images/KÖL.svg"
import KSC from "../images/KSC.svg"
import M05 from "../images/M05.svg"
import MGL from "../images/MGL.svg"
import P07 from "../images/P07.svg"
import RBL from "../images/RBL.svg"
import ROS from "../images/ROS.svg"
import S04 from "../images/S04.svg"
import SCF from "../images/SCF.svg"
import SGE from "../images/SGE.svg"
import SGF from "../images/SGF.svg"
import STP from "../images/STP.png"
import SVS from "../images/SVS.svg"
import SVW from "../images/SVW.svg"
import VfB from "../images/VfB.svg"
import WOB from "../images/WOB.svg"
import { getTeamName } from "../data/helpers"

const Logo = ({code}) => {
  const styles = { height: "18px!important" }
  const stylesUnion = { height: "16px!important" }
  switch (code) {
    case "B04":
      return <img src={B04} alt={getTeamName("B04")} title={getTeamName("B04")} sx={styles} />
    case "BIE":
      return <img src={BIE} alt={getTeamName("BIE")} title={getTeamName("BIE")} sx={styles} />
    case "BOC":
      return <img src={BOC} alt={getTeamName("BOC")} title={getTeamName("BOC")} sx={styles} />
    case "BSC":
      return <img src={BSC} alt={getTeamName("BSC")} title={getTeamName("BSC")} sx={styles} />
    case "BVB":
      return <img src={BVB} alt={getTeamName("BVB")} title={getTeamName("BVB")} sx={styles} />
    case "D98":
      return <img src={D98} alt={getTeamName("D98")} title={getTeamName("D98")} sx={styles} />
    case "DÜS":
      return <img src={DÜS} alt={getTeamName("DÜS")} title={getTeamName("DÜS")} sx={styles} />
    case "EBS":
      return <img src={EBS} alt={getTeamName("EBS")} title={getTeamName("EBS")} sx={styles} />
    case "FCA":
      return <img src={FCA} alt={getTeamName("FCA")} title={getTeamName("FCA")} sx={styles} />
    case "FCB":
      return <img src={FCB} alt={getTeamName("FCB")} title={getTeamName("FCB")} sx={styles} />
    case "FCH":
      return <img src={FCH} alt={getTeamName("FCH")} title={getTeamName("FCH")} sx={styles} />
    case "FCK":
      return <img src={FCK} alt={getTeamName("FCK")} title={getTeamName("FCK")} sx={styles} />
    case "FCM":
      return <img src={FCM} alt={getTeamName("FCM")} title={getTeamName("FCM")} sx={styles} />
    case "FCN":
      return <img src={FCN} alt={getTeamName("FCN")} title={getTeamName("FCN")} sx={styles} />
    case "FCU":
      return <img src={FCU} alt={getTeamName("FCU")} title={getTeamName("FCU")} sx={stylesUnion} />
    case "H96":
      return <img src={H96} alt={getTeamName("H96")} title={getTeamName("H96")} sx={styles} />
    case "HOF":
      return <img src={HOF} alt={getTeamName("HOF")} title={getTeamName("HOF")} sx={styles} />
    case "HSV":
      return <img src={HSV} alt={getTeamName("HSV")} title={getTeamName("HSV")} sx={styles} />
    case "JRE":
      return <img src={JRE} alt={getTeamName("JRE")} title={getTeamName("JRE")} sx={styles} />
    case "KIE":
      return <img src={KIE} alt={getTeamName("KIE")} title={getTeamName("KIE")} sx={styles} />
    case "KÖL":
      return <img src={KÖL} alt={getTeamName("KÖL")} title={getTeamName("KÖL")} sx={styles} />
    case "KSC":
      return <img src={KSC} alt={getTeamName("KSC")} title={getTeamName("KSC")} sx={styles} />
    case "M05":
      return <img src={M05} alt={getTeamName("M05")} title={getTeamName("M05")} sx={styles} />
    case "MGL":
      return <img src={MGL} alt={getTeamName("MGL")} title={getTeamName("MGL")} sx={styles} />
    case "P07":
      return <img src={P07} alt={getTeamName("P07")} title={getTeamName("P07")} sx={styles} />
    case "RBL":
      return <img src={RBL} alt={getTeamName("RBL")} title={getTeamName("RBL")} sx={styles} />
    case "ROS":
      return <img src={ROS} alt={getTeamName("ROS")} title={getTeamName("ROS")} sx={styles} />
    case "S04":
      return <img src={S04} alt={getTeamName("S04")} title={getTeamName("S04")} sx={styles} />
    case "SCF":
      return <img src={SCF} alt={getTeamName("SCF")} title={getTeamName("SCF")} sx={styles} />
    case "SGE":
      return <img src={SGE} alt={getTeamName("SGE")} title={getTeamName("SGE")} sx={styles} />
    case "SGF":
      return <img src={SGF} alt={getTeamName("SGF")} title={getTeamName("SGF")} sx={styles} />
    case "STP":
      return <img src={STP} alt={getTeamName("STP")} title={getTeamName("STP")} sx={styles} />
    case "SVS":
      return <img src={SVS} alt={getTeamName("SVS")} title={getTeamName("SVS")} sx={styles} />
    case "SVW":
      return <img src={SVW} alt={getTeamName("SVW")} title={getTeamName("SVW")} sx={styles} />
    case "VfB":
      return <img src={VfB} alt={getTeamName("VfB")} title={getTeamName("VfB")} sx={styles} />
    case "WOB":
      return <img src={WOB} alt={getTeamName("WOB")} title={getTeamName("WOB")} sx={styles} />
    default:
      return <span sx={styles}>{code}</span>
  }
}

export default Logo