import React from "react";
import { makeStyles } from "@material-ui/core";
import Link from "next/link";
import SearchBar from "../Header/SearchBar";
import Grid from "@material-ui/core/Grid";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Badge from "@material-ui/core/Badge";
import { useSelector, useDispatch } from "react-redux";
import NavDrawer from "../NavDrawer/NavDrawer";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import NavPropduct from "./NavProduct";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  elevation4: {
    boxShadow: "0px 0px 20px -1px rgba(115,115,115,0.22)",
  },
  img: {
    width: "260px",
    marginLeft: "10px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },
  phone: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "15px",
    fontWeight: "300",
    whiteSpace: "nowrap",
  },
  menui: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  phones: {
    marginTop: "20px",
    marginLeft: "44px",
  },
  main: {
    height: "93px",
    [theme.breakpoints.up("xs")]: {
      height: "193px",
    },
  },
  search: {
    marginTop: "10px",
    margin: "20px",
  },
  badge: {
    verticalAlign: "bottom",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavBarMob = (props) => {
  const globalCart = useSelector((state) => state.cart.cart);
  const matches = useMediaQuery("(max-width:1080px)");
  const classes = useStyles();

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <div className={classes.main}>
          {matches === true && (
            <AppBar className={classes.elevation4}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={1}>
                  <NavDrawer />
                </Grid>
                <Grid item xs={7}>
                  <Link href="/">
                    <div className="svg">
                      <svg
                        width="215"
                        height="70"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <title>background</title>
                          <rect
                            fill="none"
                            id="canvas_background"
                            height="72"
                            width="217"
                            y="-1"
                            x="-1"
                          />
                        </g>
                        <g>
                          <title>Layer 1</title>
                          <g stroke="null" id="svg_1">
                            <g stroke="null" id="svg_2">
                              <path
                                stroke="null"
                                id="svg_3"
                                d="m49.60734,45.31316c4.64213,0 6.90135,-2.3564 6.90135,-5.10554c0,-6.04977 -9.45741,-3.9524 -9.45741,-6.994c0,-1.03615 
                        0.85752,-1.88846 3.092,-1.88846c1.44293,0 
                        2.99306,0.42616 4.5102,1.29519l1.16259,-2.89954c-1.5089,-0.9693 -3.60321,-1.46231 -5.64806,-1.46231c-4.62564,0
                        -6.85188,2.33133 -6.85188,5.13896c0,6.12497 9.45741,4.00254 9.45741,7.08592c0,1.01108 
                        -0.90699,1.76312 -3.13323,1.76312c-1.95415,0 -3.99899,-0.71026 -5.36772,-1.71299l-1.27803,2.86612c1.43469,1.13642 
                        4.03197,1.91353 6.61276,1.91353l0,0zm17.35644,0c5.11211,0 8.89672,-3.60145 8.89672,-8.52316s-3.78461,-8.52316 -8.89672,-8.52316c-5.13685,0 -8.89672,3.62652 
                        -8.89672,8.52316c0,4.89664 3.75988,8.52316 8.89672,8.52316l0,0zm0,-3.24214c-2.90236,0 -5.08738,-2.13915 -5.08738,-5.27266s2.18502,-5.27266 5.08738,-5.27266c2.90236,0 
                        5.08738,2.13915 5.08738,5.27266s-2.18502,5.27266 -5.08738,5.27266l0,0zm30.05427,2.96639l-0.04947,-16.4781l-3.092,0l-5.98612,10.2445l-6.08506,-10.2445l-3.11674,0l0,16.4781l3.52901,0l0,-9.67629l4.75756,7.92988l1.69854,0l4.7823,-8.14713l0.02474,9.88519l3.53725,0l0,0.00836zm11.73312,0.27575c5.11211,0 8.89672,-3.60145 8.89672,-8.52316s-3.78461,-8.52316 -8.89672,-8.52316c-5.13685,0 -8.89672,3.62652 -8.89672,8.52316c0,4.89664 3.76812,8.52316 8.89672,8.52316l0,0zm0,-3.24214c-2.90236,0
                        -5.08738,-2.13915 -5.08738,-5.27266s2.18502,-5.27266 5.08738,-5.27266s5.08738,2.13915 5.08738,5.27266s-2.18502,5.27266 -5.08738,5.27266l0,0zm22.93029,-13.52007l0,10.00217l-8.08043,-10.00217l-3.11674,0l0,16.4781l3.71865,0l0,-10.00217l8.10517,10.00217l3.092,0l0,-16.4781l-3.71865,0z"
                                className="st0"
                              />
                              <path
                                stroke="null"
                                id="svg_4"
                                d="m162.24694,45.03741l-0.02474,-16.4781l-2.48185,0l-6.34891,10.92134l-6.46435,-10.92134l-2.48185,0l0,16.4781l2.87762,0l0,-10.77929l5.34298,8.89918l1.35224,0l5.34298,-9.04123l0.02474,10.92134l2.86113,0l0,0zm16.5484,0l3.15797,0l-7.33835,-16.4781l-2.97657,0l-7.31362,16.4781l3.11674,0l1.5996,-3.81035l8.12991,0l1.62433,3.81035l0,0zm-8.73182,-6.21689l3.04253,-7.2029l3.06727,7.2029l-6.1098,0l0,0zm27.85276,6.21689l-3.74338,-5.41471c2.20975,-0.86903 3.46304,-2.70736 3.46304,-5.20581c0,-3.65159 -2.64675,-5.86594 -6.92609,-5.86594l-6.68697,0l0,16.4781l3.01779,0l0,-4.80472l3.66918,0c0.20613,0 0.42051,0 0.62665,-0.02507l3.32287,4.82979l3.25691,0l0,0.00836zm-3.32287,-10.62052c0,2.0723 -1.36873,3.29228 -4.01548,3.29228l-3.52901,0l0,-6.56784l3.52901,0c2.64675,0 4.01548,1.20327 4.01548,3.27557l0,0zm9.48214,10.62052l3.01779,0l0,-13.88773l5.39245,0l0,-2.59037l-13.8027,0l0,2.59037l5.39245,0l0,13.88773z"
                                className="st1"
                              />
                              <path
                                stroke="null"
                                id="svg_5"
                                d="m18.65433,19c4.84826,0 9.23478,1.98874 
                        12.40924,5.21417c3.17446,3.21707 5.14509,7.67084 5.14509,12.57583c0,4.91335 
                        -1.96239,9.35876 -5.14509,12.57583c-3.17446,3.21707 -7.56922,5.21417 -12.40924,5.21417c-4.84826,0 
                        -9.23478,-1.98874 -12.40924,-5.21417c-3.17446,-3.21707 -5.14509,-7.67084 -5.14509,-12.57583c0,-4.91335 
                        1.96239,-9.35876 5.14509,-12.57583c3.17446,-3.21707 7.56098,-5.21417 12.40924,-5.21417l0,0zm10.52105,19.79545c0.6184,-0.30082
                         1.06365,-0.7604 1.29452,-1.36203c-0.23087,0.35931 -0.55244,0.64341 -0.9647,0.84396c-0.87401,0.30917 -1.70679,0.12534 -2.25098,-0.0752c-0.75857,-0.27575 -1.45118,-0.75204
                          -1.98713,-1.33697c1.55837,-0.80218 3.12498,-1.60436 4.6916,-2.40654c-0.09894,-0.14205 -0.20613,-0.28411 -0.32157,-0.42616c-0.2721,-0.31753 
                          -0.46998,-0.53479 -0.60191,-0.69355c-0.18964,-0.21726 -0.38753,-0.42616 -0.58542,-0.63506c0.32981,0.38438 1.2368,1.596 1.22856,1.596c-0.5277,0.27575 -1.04716,0.54314 -1.57486,0.81889c0.00825,0 -0.89874,-1.06957 -1.22031,-1.41217c0.28859,0.35931 1.07189,1.48737 1.06365,1.48737c-0.5277,0.27575 -1.04716,0.54314 -1.57486,0.81889c0.00825,0 -0.85752,-1.07793 -1.16259,-1.42053c0.28034,0.36767 1.01418,1.50409 1.00593,1.50409c-0.5277,0.27575 -1.0554,0.5515 -1.58311,0.81889c0.00825,0 -0.75033,-1.01108 -1.00593,-1.32025c0.26385,0.39273 0.51946,0.79382 0.75857,1.20327c0.51946,0.87738 1.4182,1.58765 2.45711,1.94696c0.56068,0.20054 1.40995,0.37602 2.33343,0.05014l0,0zm-8.59989,-12.87665c-0.08245,0.09192 5.76349,4.37021 8.31955,8.1722c-0.21438,0.11698 -0.42876,0.22561 -0.64314,0.3426c-2.77868,-3.60145 -8.52568,-7.72933 -8.78129,-7.48701c-0.08245,0.09192 5.40894,4.35349 7.72588,8.05522c-0.21438,0.11698 -0.42876,0.22561 -0.64314,0.3426c-2.53956,-3.50118 -7.93202,-7.61235 -8.19587,-7.37838c-0.08245,0.10027 5.05439,4.33678 7.13222,7.94659c-0.21438,0.11698 -0.42876,0.23397 -0.65138,0.35095c-2.30045,-3.40926 -7.33835,-7.49536 -7.59396,-7.26975c0.10719,0.03342 5.96963,6.05813 6.67048,8.01344c0.93997,1.54587 2.9271,2.66558 4.88949,2.38983c8.65761,-2.48174 -7.62694,-13.97965 -8.22885,-13.47829l0,0zm9.66354,-0.86903c-2.96832,-3.00817 -7.05801,-4.86321 -11.5847,-4.86321c-4.52669,0 -8.62463,1.85504 -11.5847,4.86321c-2.96832,3.00817 -4.79879,7.15277 -4.79879,11.74023c0,4.58746 1.83047,8.74041 4.79879,11.74023c2.96832,3.00817 7.05801,4.86321 11.5847,4.86321c4.52669,0 8.62463,-1.85504 11.5847,-4.86321c2.96832,-3.00817 4.79879,-7.15277 4.79879,-11.74023c0,-4.57911 -1.83047,-8.73206 -4.79879,-11.74023l0,0zm-11.5847,-3.9524c-4.48547,0 -8.52568,1.93024 -11.35383,5.01362c-3.03429,5.73224 -0.437,12.30844 8.39376,16.54495c0,0 -9.58109,-4.78801 -8.08043,-11.1386c0,0 0,0 0,0c1.03891,0.60999 2.46536,1.1782 4.31231,1.82997c6.21699,2.18928 5.9284,8.48973 5.94489,9.07465c0.03298,2.23106 1.35224,2.84941 1.35224,2.84941s-12.92869,0.24233 -14.02532,-12.45049c-0.1814,-2.05558 0.28859,-3.84378 0.95646,-5.27266c-1.87169,2.59873 -2.98481,5.79909 -2.98481,9.25849c0,8.67356 6.93433,15.70099 15.49299,15.70099c2.81991,0 5.46666,-0.76876 7.74237,-2.09736c2.64675,-1.92189 4.26284,-4.58746 4.18863,-7.50372c-0.03298,-1.16984 -0.32981,-2.2812 -0.84927,-3.31735l0.28034,-0.16712c0.89874,1.32861 1.42644,2.82434 1.46767,4.41199c0.01649,0.72698 -0.06596,1.43724 -0.23911,2.12243c1.83047,-2.57366 2.90236,-5.7406 2.90236,-9.14986c-0.00825,-8.68192 -6.94258,-15.70935 -15.50124,-15.70935z"
                                className="st0"
                              />
                            </g>
                            <path
                              stroke="null"
                              id="svg_6"
                              d="m146.96007,25.53442c0.68436,0 1.25329,-0.25068 1.62433,-0.71026l-0.58542,-0.54314c-0.26385,0.31753 -0.59366,0.47629 -0.98944,0.47629c-0.73384,0 -1.26154,-0.52643 -1.26154,-1.27847c0,-0.75204 0.51946,-1.27847 1.26154,-1.27847c0.39578,0 0.72559,0.15876 0.98944,0.46794l0.58542,-0.54314c-0.37104,-0.45958 -0.93997,-0.71026 -1.61609,-0.71026c-1.22856,0 -2.13554,0.86067 -2.13554,2.06394c-0.00825,1.19491 0.90699,2.05558 2.1273,2.05558l0,0zm4.99668,-1.67121c0.28034,-0.1337 0.44525,-0.36767 0.44525,-0.66848c0,-0.50136 -0.45349,-0.79382 -1.21207,-0.79382l-1.54188,0l0,3.06666l1.61609,0c0.83278,0 1.22856,-0.33424 1.22856,-0.86903c-0.00825,-0.36767 -0.1814,-0.60999 -0.53595,-0.73533l0,0zm-1.5089,-0.86067l0.65963,0c0.30508,0 0.46174,0.10027 0.46174,0.32589c0,0.21726 -0.15666,0.33424 -0.46174,0.33424l-0.65963,0l0,-0.66013l0,0zm0.73384,1.8634l-0.73384,0l0,-0.67684l0.75033,0c0.32157,0 0.46998,0.10863 0.46998,0.3426c0,0.22561 -0.16491,0.33424 -0.48648,0.33424l0,0zm3.99899,-0.06685c-0.39578,0 -0.67612,-0.15041 -0.7998,-0.45958l2.23449,-0.43451c-0.00825,-0.97766 -0.7091,-1.54587 -1.55837,-1.54587c-0.93172,0 -1.61609,0.66013 -1.61609,1.57929c0,0.91081 0.67612,1.57929 1.72328,1.57929c0.54419,0 0.9647,-0.16712 1.24505,-0.49301l-0.46998,-0.50972c-0.20613,0.18383 -0.437,0.28411 -0.75857,0.28411l0,0zm-0.13193,-1.77148c0.36279,0 0.62665,0.2089 0.71734,0.52643l-1.47592,0.29246c0.01649,-0.52643 0.32157,-0.81889 0.75857,-0.81889l0,0zm6.57154,-0.66848c-0.45349,0 -0.84927,0.19219 -1.08838,0.50136c-0.21438,-0.33424 -0.57717,-0.50136 -0.99769,-0.50136c-0.38753,0 -0.72559,0.1337 -0.94821,0.40109l0,-0.35095l-0.84102,0l0,3.06666l0.87401,0l0,-1.53751c0,-0.54314 0.2721,-0.80218 0.65963,-0.80218c0.36279,0 0.57717,0.22561 0.57717,0.72698l0,1.62107l0.87401,0l0,-1.53751c0,-0.54314 0.2721,-0.80218 0.66787,-0.80218c0.35455,0 0.57717,0.22561 0.57717,0.72698l0,1.62107l0.87401,0l0,-1.75477c0.00825,-0.96094 -0.51121,-1.37875 -1.22856,-1.37875l0,0zm2.85289,0.04178l-0.04123,1.22834c-0.02474,0.58492 -0.06596,1.11135 -0.47823,1.11135c-0.04123,0 -0.08245,-0.00836 -0.13193,-0.00836l-0.04123,0.72698c0.17315,0.04178 0.32157,0.06685 0.45349,0.06685c0.75033,0 0.92348,-0.7604 0.9647,-1.85504l0.02474,-0.54314l0.95646,0l0,2.33133l0.87401,0l0,-3.06666l-2.58079,0l0,0.00836zm5.37596,3.10845c0.9647,0 1.65731,-0.65177 1.65731,-1.57929c0,-0.91916 -0.70085,-1.57929 -1.65731,-1.57929c-0.9647,0 -1.66556,0.65177 -1.66556,1.57929c0,0.92752 0.7091,1.57929 1.66556,1.57929l0,0zm0,-0.72698c-0.437,0 -0.77506,-0.31753 -0.77506,-0.85232c0,-0.52643 0.33806,-0.85232 0.77506,-0.85232c0.437,0 0.76682,0.31753 0.76682,0.85232c0.00825,0.53479 -0.32981,0.85232 -0.76682,0.85232l0,0zm4.30407,0.01671c-0.39578,0 -0.67612,-0.15041 -0.7998,-0.45958l2.23449,-0.43451c-0.00825,-0.97766 -0.7091,-1.54587 -1.55837,-1.54587c-0.93172,0 -1.61609,0.66013 -1.61609,1.57929c0,0.91081 0.67612,1.57929 1.72328,1.57929c0.54419,0 0.9647,-0.16712 1.24505,-0.49301l-0.46998,-0.50972c-0.20613,0.18383 -0.437,0.28411 -0.75857,0.28411l0,0zm-0.13193,-1.77148c0.36279,0 0.62665,0.2089 0.71734,0.52643l-1.47592,0.29246c0.01649,-0.52643 0.32157,-0.81889 0.75857,-0.81889l0,0zm7.63519,-0.4178c-0.44525,0 -0.81629,0.16712 -1.07189,0.45123c0.06596,-0.58492 0.37104,-0.88574 1.06365,-1.01944l1.26978,-0.25904l-0.11543,-0.7604l-1.43469,0.29246c-1.10488,0.22561 -1.61609,0.97766 -1.61609,2.18928c0,1.36203 0.66787,2.03052 1.69854,2.03052c0.9647,0 1.64907,-0.59328 1.64907,-1.48737c-0.00825,-0.86067 -0.57717,-1.43724 -1.44293,-1.43724l0,0zm-0.20613,2.23106c-0.44525,0 -0.75857,-0.32589 -0.75857,-0.78547c0,-0.46794 0.31332,-0.7604 0.75857,-0.7604c0.45349,0 0.75033,0.29246 0.75033,0.7604c-0.00825,0.45123 -0.29683,0.78547 -0.75033,0.78547l0,0zm4.93071,-2.43996l0,1.32861c0,0.55985 -0.28859,0.82725 -0.70085,0.82725c-0.38753,0 -0.61016,-0.22561 -0.61016,-0.74369l0,-1.40381l-0.87401,0l0,1.53751c0,0.95259 0.53595,1.37875 1.29452,1.37875c0.3463,0 0.65963,-0.11698 0.8905,-0.35095l0,0.10027c0,0.5515 -0.25561,0.8356 -0.84102,0.8356c-0.37929,0 -0.76682,-0.1337 -1.02242,-0.3426l-0.3463,0.63506c0.3463,0.27575 0.8905,0.4178 1.44293,0.4178c1.0554,0 1.64907,-0.52643 1.64907,-1.66285l0,-2.54859l-0.88225,0l0,-0.00836zm4.49371,0l0,0.39273c-0.23087,-0.29246 -0.57717,-0.44287 -0.99769,-0.44287c-0.84102,0 -1.5089,0.58492 -1.5089,1.47902c0,0.8941 0.67612,1.47902 1.5089,1.47902c0.39578,0 0.72559,-0.12534 0.95646,-0.38438l0,0.1337c0,0.5515 -0.2721,0.8356 -0.8905,0.8356c-0.38753,0 -0.80804,-0.1337 -1.07189,-0.35095l-0.3463,0.63506c0.35455,0.27575 0.90699,0.4178 1.48416,0.4178c1.08838,0 1.69854,-0.52643 1.69854,-1.66285l0,-2.54859l-0.83278,0l0,0.01671zm-0.82453,2.18928c-0.46174,0 -0.7998,-0.30082 -0.7998,-0.75204c0,-0.45123 0.33806,-0.75204 0.7998,-0.75204c0.46174,0 0.79155,0.30082 0.79155,0.75204c0,0.45123 -0.32981,0.75204 -0.79155,0.75204l0,0zm5.18632,-2.18928l0,1.32861c0,0.55985 -0.28859,0.82725 -0.70085,0.82725c-0.38753,0 -0.61016,-0.22561 -0.61016,-0.74369l0,-1.40381l-0.87401,0l0,1.53751c0,0.95259 0.53595,1.37875 1.29452,1.37875c0.3463,0 0.65963,-0.11698 0.8905,-0.35095l0,0.10027c0,0.5515 -0.25561,0.8356 -0.84102,0.8356c-0.37929,0 -0.76682,-0.1337 -1.02242,-0.3426l-0.3463,0.63506c0.3463,0.27575 0.8905,0.4178 1.44293,0.4178c1.0554,0 1.64907,-0.52643 1.64907,-1.66285l0,-2.54859l-0.88225,0l0,-0.00836zm6.86012,2.33969l0,-2.33133l-0.87401,0l0,2.33133l-0.99769,0l0,-2.33133l-0.87401,0l0,2.33133l-1.00593,0l0,-2.33133l-0.87401,0l0,3.06666l4.22161,0l0,0.60999l0.81629,0l0,-1.33697l-0.41227,0l0,-0.00836zm2.87762,0.05849c-0.39578,0 -0.67612,-0.15041 -0.7998,-0.45958l2.23449,-0.43451c-0.00825,-0.97766 -0.7091,-1.54587 -1.55837,-1.54587c-0.93172,0 -1.61609,0.66013 -1.61609,1.57929c0,0.91081 0.67612,1.57929 1.72328,1.57929c0.54419,0 0.9647,-0.16712 1.24505,-0.49301l-0.46998,-0.50972c-0.20613,0.18383 -0.437,0.28411 -0.75857,0.28411l0,0zm-0.12368,-1.77148c0.36279,0 0.62665,0.2089 0.71734,0.52643l-1.47592,0.29246c0.01649,-0.52643 0.31332,-0.81889 0.75857,-0.81889l0,0zm4.20512,1.77148c-0.39578,0 -0.67612,-0.15041 -0.7998,-0.45958l2.23449,-0.43451c-0.00825,-0.97766 -0.7091,-1.54587 -1.56661,-1.54587c-0.93172,0 -1.61609,0.66013 -1.61609,1.57929c0,0.91081 0.67612,1.57929 1.72328,1.57929c0.54419,0 0.9647,-0.16712 1.24505,-0.49301l-0.46998,-0.50972c-0.19789,0.18383 -0.42876,0.28411 -0.75033,0.28411l0,0zm-0.12368,-1.77148c0.36279,0 0.62665,0.2089 0.71734,0.52643l-1.47592,0.29246c0.01649,-0.52643 0.31332,-0.81889 0.75857,-0.81889l0,0zm2.7457,1.05286l0.70085,0l0.17315,-2.60708l-1.04716,0l0.17315,2.60708l0,0zm0.3463,1.42888c0.31332,0 0.53595,-0.23397 0.53595,-0.51807c0,-0.29246 -0.22262,-0.50972 -0.53595,-0.50972c-0.31332,0 -0.53595,0.21726 -0.53595,0.50972c0,0.28411 0.22262,0.51807 0.53595,0.51807z"
                              className="st2"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </Link>
                </Grid>

                <Grid item xs={2}>
                  <Link href="/cart">
                    <a className="user">
                      <Badge
                        badgeContent={globalCart.length}
                        color="secondary"
                        className={classes.badge}
                      >
                        <svg
                          className="img"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="33"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.665 9.068l-3.665-1.66v14l3.665 2.592 14.335-2.155v-14.845l-14.335 2.068zm-1.665 1.441l1 .453v10.118l-1-.707v-9.864zm14 9.615l-11 1.653v-10.881l11-1.587v10.815zm-2-15.833l-.001 1.749c0 .246-.18.455-.423.492-.303.045-.576-.19-.576-.495v-1.746c.001-.691-.231-1.304-.653-1.726-.368-.37-.847-.565-1.384-.565-1.547 0-2.96 1.558-2.963 3.268v1.681c0 .247-.181.457-.425.494-.302.046-.575-.189-.575-.494l.001-1.683c.004-2.261 1.866-4.266 3.962-4.266 1.717 0 3.039 1.387 3.037 3.291zm-9.999 2.209v-2.235c.004-2.26 1.866-4.265 3.962-4.265.492 0 .944.125 1.35.332-.423.17-.822.4-1.188.683l-.162-.015c-1.547 0-2.961 1.558-2.963 3.268v2.232c0 .248-.182.458-.427.494-.3.045-.572-.187-.572-.494z" />
                        </svg>
                      </Badge>
                    </a>
                  </Link>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs>
                    <div className={classes.search}>
                      <SearchBar />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </AppBar>
          )}
        </div>
      </HideOnScroll>
      <style jsx>{`
              
        .city{
            font-family: Montserrat, sans-serif; 
            font-weight: 400;
            font-size: 15px;
            cursor: pointer;
        }
        .user{
            font-family: Montserrat, sans-serif; 
            font-weight: 400;
            font-size: 14px;
            cursor: pointer;
            
            
        }
        .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#209F38;}
	    .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FECB00;}

        
        .img {
          width: 24px;
          cursor: pointer;
          margin-right: 2px;
        }
        .city:hover{
            color:  #209F38 ;
            cursor: pointer;t
        }
        .img:hover{
            fill: #209F38;
            cursor: pointer;t
        }
        .user:hover{
            color:  #209F38 ;
            cursor: pointer;
        }
        .svg{
            cursor: pointer;
        }
        
        
        
      `}</style>
    </React.Fragment>
  );
};

export default NavBarMob;
