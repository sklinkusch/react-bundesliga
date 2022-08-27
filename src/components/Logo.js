/** @jsxImportSource theme-ui */
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
      return <img src={B04} alt={getTeamName("B04")} title={getTeamName("B04")} sx={styles} />
    case "BOC":
      return <img src={BOC} alt={getTeamName("BOC")} title={getTeamName("BOC")} sx={styles} />
    case "BSC":
      return <img src={BSC} alt={getTeamName("BSC")} title={getTeamName("BSC")} sx={styles} />
    case "BVB":
      return <img src={BVB} alt={getTeamName("BVB")} title={getTeamName("BVB")} sx={styles} />
    case "FCA":
      return <img src={FCA} alt={getTeamName("FCA")} title={getTeamName("FCA")} sx={styles} />
    case "FCB":
      return <img src={FCB} alt={getTeamName("FCB")} title={getTeamName("FCB")} sx={styles} />
    case "HOF":
      return <img src={HOF} alt={getTeamName("HOF")} title={getTeamName("HOF")} sx={styles} />
    case "KÖL":
      return <img src={KÖL} alt={getTeamName("KÖL")} title={getTeamName("KÖL")} sx={styles} />
    case "M05":
      return <img src={M05} alt={getTeamName("M05")} title={getTeamName("M05")} sx={styles} />
    case "MGL":
      return <img src={MGL} alt={getTeamName("MGL")} title={getTeamName("MGL")} sx={styles} />
    case "RBL":
      return <img src={RBL} alt={getTeamName("RBL")} title={getTeamName("RBL")} sx={styles} />
    case "S04":
      return <img src={S04} alt={getTeamName("S04")} title={getTeamName("S04")} sx={styles} />
    case "SCF":
      return <img src={SCF} alt={getTeamName("SCF")} title={getTeamName("SCF")} sx={styles} />
    case "SGE":
      return <img src={SGE} alt={getTeamName("SGE")} title={getTeamName("SGE")} sx={styles} />
    case "SVW":
      return <img src={SVW} alt={getTeamName("SVW")} title={getTeamName("SVW")} sx={styles} />
    case "UNI":
      return <img src={UNI} alt={getTeamName("UNI")} title={getTeamName("UNI")} sx={stylesUnion} />
    case "VfB":
      return <img src={VfB} alt={getTeamName("VfB")} title={getTeamName("VfB")} sx={styles} />
    case "WOB":
      return <img src={WOB} alt={getTeamName("WOB")} title={getTeamName("WOB")} sx={styles} />
    default:
      return <span sx={styles}>{code}</span>
  }
}

export default Logo