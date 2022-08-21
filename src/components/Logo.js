import React from 'react'
import B04 from "../images/B04.svg"
import BOC from "../images/BOC.svg"
import BSC from "../images/BSC.svg"
import BVB from "../images/BVB.svg"
import FCA from "../images/FCA.svg"
import FCB from "../images/FCB.svg"
import HOF from "../images/HOF.svg"
import KÖL from "../images/KÖL.svg"
import M05 from "../images/M05.svg"
import MGL from "../images/MGL.svg"
import RBL from "../images/RBL.svg"
import S04 from "../images/S04.svg"
import SCF from "../images/SCF.svg"
import SGE from "../images/SGE.svg"
import SVW from "../images/SVW.svg"
import UNI from "../images/UNI.svg"
import VfB from "../images/VfB.svg"
import WOB from "../images/WOB.svg"
import { getTeamName } from "../data/helpers"

const Logo = ({code}) => {
  const styles = { height: "18px" }
  const stylesUnion = { height: "16px" }
  switch (code) {
    case "B04":
      return <img src={B04} alt={getTeamName("B04")} title={getTeamName("B04")} style={styles} />
    case "BOC":
      return <img src={BOC} alt={getTeamName("BOC")} title={getTeamName("BOC")} style={styles} />
    case "BSC":
      return <img src={BSC} alt={getTeamName("BSC")} title={getTeamName("BSC")} style={styles} />
    case "BVB":
      return <img src={BVB} alt={getTeamName("BVB")} title={getTeamName("BVB")} style={styles} />
    case "FCA":
      return <img src={FCA} alt={getTeamName("FCA")} title={getTeamName("FCA")} style={styles} />
    case "FCB":
      return <img src={FCB} alt={getTeamName("FCB")} title={getTeamName("FCB")} style={styles} />
    case "HOF":
      return <img src={HOF} alt={getTeamName("HOF")} title={getTeamName("HOF")} style={styles} />
    case "KÖL":
      return <img src={KÖL} alt={getTeamName("KÖL")} title={getTeamName("KÖL")} style={styles} />
    case "M05":
      return <img src={M05} alt={getTeamName("M05")} title={getTeamName("M05")} style={styles} />
    case "MGL":
      return <img src={MGL} alt={getTeamName("MGL")} title={getTeamName("MGL")} style={styles} />
    case "RBL":
      return <img src={RBL} alt={getTeamName("RBL")} title={getTeamName("RBL")} style={styles} />
    case "S04":
      return <img src={S04} alt={getTeamName("S04")} title={getTeamName("S04")} style={styles} />
    case "SCF":
      return <img src={SCF} alt={getTeamName("SCF")} title={getTeamName("SCF")} style={styles} />
    case "SGE":
      return <img src={SGE} alt={getTeamName("SGE")} title={getTeamName("SGE")} style={styles} />
    case "SVW":
      return <img src={SVW} alt={getTeamName("SVW")} title={getTeamName("SVW")} style={styles} />
    case "UNI":
      return <img src={UNI} alt={getTeamName("UNI")} title={getTeamName("UNI")} style={stylesUnion} />
    case "VfB":
      return <img src={VfB} alt={getTeamName("VfB")} title={getTeamName("VfB")} style={styles} />
    case "WOB":
      return <img src={WOB} alt={getTeamName("WOB")} title={getTeamName("WOB")} style={styles} />
    default:
      return <span style={styles}>{code}</span>
  }
}

export default Logo