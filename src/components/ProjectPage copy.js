import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

export const ProjectPage_copy = () => {


  const dyeData = [
    { name: 'Reactive Red M5B', code: 'Reactive Red - 2', light: '4-5', washing: '4-5', perspiration: '3-4', hypochlorite: '1', dischargeability: 'P', color: '#FF0000' },
    { name: 'Reactive Red M8B', code: 'Reactive Red - 11', light: '4-5', washing: '4-5', perspiration: '2', hypochlorite: '4', dischargeability: 'P', color: '#E60026' },
    { name: 'Reactive Magenta MB', code: 'Reactive Violet - 13', light: '4-5', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#FF00FF' },
    { name: 'Reactive Orange M2R', code: 'Reactive Orange - 4', light: '5', washing: '5', perspiration: '4', hypochlorite: '4', dischargeability: 'P', color: '#FFA500' },
    { name: 'Reactive Orange M2RJ', code: '', light: '3-4', washing: '4', perspiration: '4', hypochlorite: '4-5', dischargeability: 'P', color: '#FF4500' },
    { name: 'Reactive Gol. Yellow MR', code: 'Reactive Yellow - 44', light: '5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#FFD700' },
    { name: 'Reactive Yellow MR EX H/C', code: 'Reactive Yellow - 44', light: '5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#FFD700' },
    { name: 'Reactive Yellow M3R', code: 'Reactive Yellow - 36', light: '6', washing: '5', perspiration: '4', hypochlorite: '2', dischargeability: 'G', color: '#FFFF00' },
    { name: 'Reactive Yellow M4R', code: 'Reactive Orange - 14', light: '5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#FFD700' },
    { name: 'Reactive Yellow M8G', code: 'Reactive Yellow - 86', light: '6', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'G', color: '#FFFF00' },
    { name: 'Reactive Yellow M4G', code: 'Reactive Yellow - 22', light: '6', washing: '4', perspiration: '5', hypochlorite: '1', dischargeability: 'G', color: '#FFFF99' },
    { name: 'Reactive Yellow MGR', code: 'Reactive Yellow - 7', light: '6', washing: '5', perspiration: '4-5', hypochlorite: '4-5', dischargeability: 'P', color: '#FFFFE0' },
    { name: 'Reactive Violet C4R', code: 'Reactive Violet - 12', light: '4', washing: '3', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#9400D3' },
    { name: 'Reactive Violet C2R', code: 'Reactive Violet - 14', light: '3-4', washing: '3', perspiration: '4', hypochlorite: '1', dischargeability: 'P', color: '#8A2BE2' },
    { name: 'Reactive Blue MR', code: 'Reactive Blue - 4', light: '6', washing: '5', perspiration: '5', hypochlorite: '2', dischargeability: 'P', color: '#0000FF' },
    { name: 'Reactive Blue M2R', code: 'Reactive Blue - 81', light: '6', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'P', color: '#00008B' },
    { name: 'Reactive Blue M2R H/C', code: 'Reactive Blue - 81', light: '6', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'P', color: '#00008B' },
    { name: 'Reactive Navy Blue M3R', code: 'Reactive Blue - 9', light: '5', washing: '4-5', perspiration: '3', hypochlorite: '3', dischargeability: 'P', color: '#000080' },
    { name: 'Reactive Blue M4GD H/C', code: 'Reactive Blue - 168', light: '6', washing: '5', perspiration: '3-4', hypochlorite: '2', dischargeability: 'P', color: '#4682B4' },
    { name: 'Reactive Tur. Blue MGN', code: 'Reactive Blue - 140', light: '6', washing: '4', perspiration: '4', hypochlorite: '2-3', dischargeability: 'P', color: '#00CED1' },
    { name: 'Reactive Tur. Blue Ha5G', code: 'Reactive Blue - 71', light: '6', washing: '3-4', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'P', color: '#5F9EA0' },
  ];



  const dyeData2 = [
    { name: 'Reactive Yellow HE6G', code: 'Reactive Yellow - 135', light: '4-5', washing: '4', perspiration: '4', hypochlorite: '1', dischargeability: 'G', color: '#FFFF33' },
    { name: 'Reactive Yellow HE4R', code: 'Reactive Yellow - 81', light: '5-6', washing: '5', perspiration: '4-5', hypochlorite: '1-2', dischargeability: 'G', color: '#FFD700' },
    { name: 'Reactive Yellow HE4R', code: 'Reactive Yellow - 84', light: '5-6', washing: '5', perspiration: '4-5', hypochlorite: '2-3', dischargeability: 'P', color: '#FFA500' },
    { name: 'Reactive G. Yellow HE4R', code: 'Reactive Yellow - 81-A', light: '5', washing: '5', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'P', color: '#FF4500' },
    { name: 'Reactive Orange HER', code: 'Reactive Orange - 84', light: '3-4', washing: '4', perspiration: '4', hypochlorite: '4-5', dischargeability: 'P', color: '#FF6347' },
    { name: 'Reactive Orange HE2R', code: 'Reactive Orange - 84-A', light: '3-4', washing: '4', perspiration: '4', hypochlorite: '4-5', dischargeability: 'P', color: '#FF7F50' },
    { name: 'Reactive Red HE3B', code: 'Reactive Red - 120', light: '5', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'P', color: '#FF0000' },
    { name: 'Reactive Red HE5B', code: '', light: '4-5', washing: '5', perspiration: '5', hypochlorite: '3', dischargeability: 'P', color: '#DC143C' },
    { name: 'Reactive Red HE7B', code: 'Reactive Red - 141', light: '4-5', washing: '5', perspiration: '5', hypochlorite: '3', dischargeability: 'P', color: '#B22222' },
    { name: 'Reactive Red HE8B', code: 'Reactive Red - 152', light: '4-5', washing: '5', perspiration: '5', hypochlorite: '3-4', dischargeability: 'P', color: '#8B0000' },
    { name: 'Reactive Green HE 4B', code: 'Reactive Green - 19', light: '4', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#008000' },
    { name: 'Reactive Green HE 4BD', code: 'Reactive Green - 19A', light: '4', washing: '5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#006400' },
    { name: 'Reactive Black HEBL', code: '', light: '4', washing: '5', perspiration: '4', hypochlorite: '3', dischargeability: 'P', color: '#000000' },
    { name: 'Reactive Navy Blue HER', code: 'Reactive Blue - 171', light: '4', washing: '5', perspiration: '4', hypochlorite: '1-2', dischargeability: 'F', color: '#000080' },
    { name: 'Reactive Navy Blue HE2R', code: 'Reactive Blue - 172', light: '4', washing: '4-5', perspiration: '4', hypochlorite: '2', dischargeability: 'F', color: '#00008B' },
    { name: 'Reactive Blue HERD', code: 'Reactive Blue - 160', light: '6', washing: '5', perspiration: '4', hypochlorite: '3', dischargeability: 'F', color: '#1E90FF' },
    { name: 'Reactive Navy Blue HEGN', code: 'Reactive Blue - 198', light: '4-5', washing: '4-5', perspiration: '3-4', hypochlorite: '3', dischargeability: 'F', color: '#4682B4' },
  ];
  

  const dyeData3 = [
    { name: 'Reactive Yellow H7GL', code: 'Reactive Yellow - 57', light: '6', washing: '5', perspiration: '5', hypochlorite: '2', dischargeability: 'G', color: '#FFFF00' },
    { name: 'Reactive Yellow H4G', code: 'Reactive Yellow - 18', light: '6', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G', color: '#FFD700' },
    { name: 'Reactive Gol. Yellow HR', code: 'Reactive Yellow - 12', light: '6', washing: '5', perspiration: '5', hypochlorite: '3', dischargeability: 'F', color: '#FFA500' },
    { name: 'Reactive Orange H2R', code: 'Reactive Orange - 13', light: '4', washing: '5', perspiration: '4', hypochlorite: '4', dischargeability: 'P', color: '#FF8C00' },
    { name: 'Reactive Red H8B', code: 'Reactive Red - 31', light: '4', washing: '4', perspiration: '4', hypochlorite: '3', dischargeability: 'P', color: '#FF0000' },
    { name: 'Reactive Red 6BX', code: 'Reactive Red - 76', light: '4', washing: '4', perspiration: '5', hypochlorite: '2', dischargeability: 'P', color: '#DC143C' },
    { name: 'Reactive Red Brown H4R', code: 'Reactive Brown - 9', light: '4', washing: '5', perspiration: '4', hypochlorite: '5', dischargeability: 'P', color: '#8B4513' },
    { name: 'Reactive Magenta HB', code: 'Reactive Violet - 13', light: '4', washing: '4', perspiration: '4', hypochlorite: '1', dischargeability: 'F', color: '#FF00FF' },
    { name: 'Reactive Purple H3R', code: 'Reactive Violate - 1', light: '6', washing: '4', perspiration: '5', hypochlorite: '4', dischargeability: 'P', color: '#800080' },
    { name: 'Reactive Black HN', code: 'Reactive Black - 8', light: '5', washing: '4', perspiration: '5', hypochlorite: '4', dischargeability: 'P', color: '#000000' },
    { name: 'Reactive Blue H5R', code: 'Reactive Blue - 13', light: '5', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'P', color: '#0000FF' },
    { name: 'Reactive Blue H2R', code: '', light: '4', washing: '4', perspiration: '4', hypochlorite: '2', dischargeability: 'P', color: '#00008B' },
    { name: 'Reactive Blue H3RP', code: 'Reactive Blue - 49', light: '4', washing: '5', perspiration: '4', hypochlorite: '2', dischargeability: 'P', color: '#0000CD' },
    { name: 'Reactive Tur. Blue H5G', code: 'Reactive Blue - 25', light: '5-6', washing: '4-5', perspiration: '3', hypochlorite: '3-4', dischargeability: 'P', color: '#00CED1' },
    { name: 'Reactive Navy Blue RX', code: 'Reactive Blue - 59', light: '3', washing: '3-4', perspiration: '4-5', hypochlorite: '1', dischargeability: 'P', color: '#000080' },
  ];





  const dyeData4 = [
    { name: 'Reactive Red ME4BL', code: 'Reactive Red - 195', light: '6', washing: '4-5', perspiration: '4-5', hypochlorite: '3', dischargeability: 'P', color: '#FF0000' },
    { name: 'Reactive Red ME6BL', code: 'Reactive Red - 196/250', light: '5', washing: '4-5', perspiration: '4', hypochlorite: '3-4', dischargeability: 'F', color: '#DC143C' },
    { name: 'Reactive Red ME3BL', code: 'Reactive Red - 180', light: '5-6', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'P', color: '#FF4500' },
    { name: 'Reactive Orange ME2RL', code: 'Reactive Orange - 122', light: '5', washing: '5', perspiration: '4', hypochlorite: '2', dischargeability: 'P', color: '#FFA500' },
    { name: 'Reactive G. Yellow MERL', code: 'Reactive Yellow - 145', light: '5', washing: '5', perspiration: '4', hypochlorite: '4', dischargeability: 'F', color: '#FFFF00' },
    { name: 'Reactive Yellow ME3RL', code: '', light: '6', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#FFFF00' },
    { name: 'Reactive Yellow ME4GL', code: 'Reactive Yellow-160/186', light: '6', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'F', color: '#FFFF00' },
    { name: 'Reactive Green ME4GL', code: '', light: '4-5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'F', color: '#008000' },
    { name: 'Reactive Blue ME2RL', code: 'Reactive Blue - 158', light: '4', washing: '5', perspiration: '4', hypochlorite: '1', dischargeability: 'F', color: '#0000FF' },
    { name: 'Reactive Navy Blue ME2GL', code: 'Reactive Blue 194', light: '4-5', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'F', color: '#000080' },
    { name: 'Reactive Jet Black HFGR', code: '', light: '5-6', washing: '5', perspiration: '5', hypochlorite: '2', dischargeability: 'F', color: '#000000' },
    { name: 'Reactive Black HFGR', code: '', light: '4', washing: '5', perspiration: '4', hypochlorite: '3', dischargeability: 'G', color: '#000000' },
    { name: 'Reactive Copper Blue BF', code: 'Reactive Blue - 221', light: '6-7', washing: '4', perspiration: '4', hypochlorite: '2', dischargeability: 'G', color: '#008080' },
    { name: 'Reactive Blue BF', code: 'Reactive Blue - 222', light: '4-5', washing: '4', perspiration: '4', hypochlorite: '2', dischargeability: 'G', color: '#0000CD' },
  ];

  const dyeData5 = [
    { name: 'Reactive Red 4B', code: 'Reactive Red - 24', light: '6', washing: '3-4', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Red 5B', code: 'Reactive Red - 35', light: '6', washing: '3-4', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Red C2G', code: 'Reactive Red - 106', light: '4', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Red RB', code: 'Reactive Red - 198', light: '5-6', washing: '4-5', perspiration: '4', hypochlorite: '1', dischargeability: 'F' },
    { name: 'Reactive Orange 3R', code: 'Reactive Orange - 16', light: '5-6', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Orange 2R', code: 'Reactive Orange - 7', light: '4-5', washing: '4-5', perspiration: '5', hypochlorite: '1-2', dischargeability: 'G' },
    { name: 'Reactive G. Yellow R', code: 'Reactive Yellow - 20', light: '5', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Yellow FG', code: 'Reactive Yellow 42', light: '5', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Yellow GR', code: 'Reactive Yellow -15', light: '6', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Yellow RTN', code: 'Reactive Yellow - 24', light: '6-7', washing: '4', perspiration: '4', hypochlorite: '2', dischargeability: 'F' },
    { name: 'Reactive G. Yellow RNL', code: 'Reactive G. Yellow - 107', light: '5', washing: '4-5', perspiration: '4-5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Yellow R', code: 'Reactive Yellow - 77', light: '4-5', washing: '5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Yellow GL', code: 'Reactive Yellow - 37', light: '6-7', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Black B', code: 'Reactive Black -5', light: '5', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Black RL', code: 'Reactive Black - 31', light: '7', washing: '4-5', perspiration: '5', hypochlorite: '3-4', dischargeability: 'F' },
    { name: 'Reactive Violet 5R', code: 'Reactive Violet - 5', light: '6-7', washing: '4', perspiration: '3-4', hypochlorite: '5', dischargeability: 'P' },
    { name: 'Reactive Tur. Blue G.', code: 'Reactive Blue-21', light: '6', washing: '4-5', perspiration: '5', hypochlorite: '3-4', dischargeability: 'P' },
    { name: 'Reactive Tur. Blue H2GP', code: '', light: '6', washing: '4', perspiration: '5', hypochlorite: '3-4', dischargeability: 'P' },
    { name: 'Reactive Blue 3R', code: 'Reactive Blue - 28', light: '7', washing: '4', perspiration: '5', hypochlorite: '3-4', dischargeability: 'G' },
    { name: 'Reactive Blue R', code: 'Reactive Blue - 19', light: '6-7', washing: '4-5', perspiration: '4-5', hypochlorite: '3-4', dischargeability: 'F' },
    { name: 'Reactive Blue RGB', code: 'Reactive Blue - 250', light: '4-5', washing: '3-4', perspiration: '4', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Blue BB', code: 'Reactive Blue - 220', light: '6-7', washing: '4', perspiration: '5', hypochlorite: '1', dischargeability: 'G' },
    { name: 'Reactive Dark Blue HR', code: 'Reactive Blue - 89', light: '5-6', washing: '3-4', perspiration: '5', hypochlorite: '1', dischargeability: 'F' },
    { name: 'Reactive Navy Blue GG', code: 'Reactive Blue - 203', light: '4-5', washing: '3-4', perspiration: '5', hypochlorite: '1', dischargeability: 'F' },
    { name: 'Reactive Black WNN', code: 'Reactive Black -5', light: '5', washing: '4-5', perspiration: '5', hypochlorite: '1', dischargeability: 'G' }
  ];
  


  const dyeData6 = [
    { name: 'REACTIVE YELLOW P4G', code: 'REACTIVE YELLOW 18', suitability: 'GOOD', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '5-6', light: '5', rubbing: '4', washing: '5', perspiration: '5', acidic: '(4-5 / 5)' },
    { name: 'REACTIVE G. YELLOW PR', code: 'REACTIVE ORANGE 12', suitability: 'FAIR', solubility: '3', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '5', light: '6', rubbing: '5', washing: '4', perspiration: '5', acidic: '(5 / 5)' },
    { name: 'REACTIVE ORANGE P2R', code: 'REACTIVE ORANGE 13', suitability: 'FAIR', solubility: '4', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '3-4', light: '4-5', rubbing: '5', washing: '4', perspiration: '5', acidic: '(5 / 4)' },
    { name: 'REACTIVE RED P8B', code: 'REACTIVE RED 13', suitability: 'POOR', solubility: '3-4', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '3-4', light: '5', rubbing: '4', washing: '5', perspiration: '5', acidic: '(4 / 4)' },
    { name: 'REACTIVE RED P6B', code: 'REACTIVE RED 76', suitability: 'FAIR', solubility: '2', dischargebility: 'M', hypochlorite: '+', bleach: '+', reactivities: '70', printing: '3', light: '3-4', rubbing: '3', washing: '2-3', perspiration: '3-4', acidic: '(4 / 4)' },
    { name: 'REACTIVE RED P4R', code: 'REACTIVE BROWN 9', suitability: 'FAIR', solubility: '4', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '4', light: '5', rubbing: '4', washing: '4', perspiration: '4', acidic: '(4 / 4)' },
    { name: 'REACTIVE MEGENTA PB', code: 'REACTIVE VIOLATE 26', suitability: 'POOR', solubility: '1-2', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '3-4', light: '4-5', rubbing: '5', washing: '4', perspiration: '5', acidic: '(4 / 4)' },
    { name: 'REACTIVE PURPLE P3R', code: 'REACTIVE VIOLET 1', suitability: 'POOR', solubility: '4', dischargebility: 'M', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '5-6', light: '6-7', rubbing: '5', washing: '5', perspiration: '5', acidic: '(3 / 3)' },
    { name: 'REACTIVE BLACK PN', code: 'REACTIVE BLACK 8', suitability: 'POOR', solubility: '3-4', dischargebility: 'l', hypochlorite: '+', bleach: '+', reactivities: '60', printing: '4-5', light: '5', rubbing: '4-5', washing: '4-5', perspiration: '5', acidic: '(4-5/ 4-5)' },
    { name: 'REACTIVE BLUE P5R P6B', code: 'REACTIVE BLUE 13', suitability: 'POOR', solubility: '1-2', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '5', light: '6', rubbing: '5', washing: '4', perspiration: '5', acidic: '(4-5 / 5)' },
    { name: 'REACTIVE T.BLUE P5G', code: 'REACTIVE BLUE 25', suitability: 'FAIR', solubility: '3', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '4', light: '5', rubbing: '4', washing: '4', perspiration: '4', acidic: '(4 / 4)' },
    { name: 'REACTIVE NAVY BLUE PX', code: 'REACTIVE BLUE 59', suitability: 'POOR', solubility: '1-2', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '3', light: '4', rubbing: '4', washing: '3', perspiration: '3-4', acidic: '(4 / 4)' },
    { name: 'REACTIVE BLUE P3R', code: 'REACTIVE BLUE 49', suitability: 'POOR', solubility: '2', dischargebility: 'H', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '3', light: '4', rubbing: '4', washing: '3', perspiration: '4', acidic: '(4-5 / 4)' },
    { name: 'REACTIVE YELLOW P6T', code: 'REACTIVE YELLOW 95', suitability: 'GOOD', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '70', printing: '4-5', light: '5-6', rubbing: '5', washing: '4-5', perspiration: '4-5', acidic: '((4-5/5) / (4-5/5)' },
    { name: 'REACTIVE RED P2B', code: 'REACTIVE RED 24', suitability: 'POOR', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '80', printing: '4-5', light: '5', rubbing: '4-5', washing: '3-4', perspiration: '4-5', acidic: '((4/5) / (4-5/4)' },
    { name: 'REACTIVE RED P3B', code: 'REACTIVE RED 45', suitability: 'POOR', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '100', printing: '4-5', light: '5-6', rubbing: '4-5', washing: '3-4', perspiration: '4-5', acidic: '((4-5/4-5) / (4-5/4-5))' },
    { name: 'REACTIVE RED P4B', code: 'REACTIVE RED 45', suitability: 'POOR', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '90', printing: '4-5', light: '5', rubbing: '4-5', washing: '3-4', perspiration: '4-5', acidic: '((4/4-5) / (4-5/4-5)' },
    { name: 'REACTIVE RED P6B', code: 'REACTIVE RED 218', suitability: 'POOR', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '70', printing: '4', light: '4-5', rubbing: '4-5', washing: '3', perspiration: '5-4', acidic: '((4-5/4-5) / (4-5/4-5)' },
    { name: 'REACTIVE T.BLUE PGR', code: 'REACTIVE BLUE 72', suitability: 'POOR', solubility: '1', dischargebility: 'L', hypochlorite: '+', bleach: '+', reactivities: '72', printing: '4', light: '5', rubbing: '4', washing: '3-4', perspiration: '4', acidic: '((4/3) / (4-5/4)' }
];




    const [text, setText] = useState('');
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -125; // Adjust this value as needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="project_page_margin">






<section>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1 >Reactive Dyes Manufacturer</h1>
               <br ></br>
          
              </div>}
            </TrackVisibility>  
          </Col>
          
        </Row>
      </Container>
    </section>







      <div className="project_page">
      
        <div className="menu"  style={{ position: "sticky", top: 0, zIndex: 100 }}>
          <ul className="menuu">
            <li className='heading'>REACTIVE DYES</li>
            <li><button onClick={() => scrollToSection('REACTIVE COLD DYES')}>REACTIVE COLD DYES</button></li>
            <li><button onClick={() => scrollToSection('REACTIVE HE DYES')}>REACTIVE HE DYES</button></li>
            <li><button onClick={() => scrollToSection('REACTIVE HOT DYES')}>REACTIVE HOT DYES</button></li>
            <li><button onClick={() => scrollToSection('REACTIVE ME DYES')}>REACTIVE ME DYES</button></li>
            <li><button onClick={() => scrollToSection('REACTIVE VINYL SULPHONE BASE DYE')}>REACTIVE VINYL SULPHONE BASE DYE</button></li>
            <li><button onClick={() => scrollToSection('REACTIVE PRINTING DYES')}>REACTIVE PRINTING DYES</button></li>
          </ul>
        </div>
        






        <div className="content">
          <div id="REACTIVE COLD DYES" style={{ overflowX: 'auto' }}>
            <h1>REACTIVE COLD DYES</h1>
            <p>Reactive dyes are a class of highly coloured organic substances, primarily used for tinting textiles, that attach themselves to their substrates by a chemical reaction that forms a covalent bond between the molecule of dye and that of the fibre. The dyestuff thus becomes a part of the fibre and is much less likely to be removed by washing than are dyestuffs that adhere by adsorption.

</p><br></br><p>The first fibre reactive dyes were designed for cellulose fibres, and they are still used mostly in this way. There are also commercially available fibre reactive dyes for protein and polyamide fibres. In theory, fibre reactive dyes have been developed for other fibres, but these are not yet practical commercially. The dyes contain a reactive group that, when applied to a fibre in a weakly alkaline dyebath, form a chemical bond with the fibre. Reactive dyes can also be used to dye wool and nylon, in the latter case they are applied under weakly acidic conditions.


</p><br></br><p>The most important characteristic of reactive dyes is the formation of covalent bonds with the substrate to be coloured, i.e. the dye forms a chemical bond with cellulose, which is the main component of cotton fibers.

</p><br></br><p>Fiber reactive dyes are the most permanent of all dye types. Unlike other dyes, it actually forms a covalent bond with the cellulose or protein molecule. Once the bond is formed, what you have is one molecule, as the dye molecule has become an actual part of the cellulose fiber molecule. No wonder you can safely wash a garment that has been dyed in bright fiber reactive colours with white clothing, a hundred times, without endangering the whites in the least - even if it is all different bright colours, or even solid black! In contrast to all other dyes the reactive dyes bind chemically to the textile fibres, significantly improving the product's colour stability and washability. Thus reactive dying of cotton is currently the most widespread textile dying process in the world.</p>
          
<h1>Reactive Cold Dyes - Fastness Properties</h1>
      <table style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
            <th >Dye Name</th>
            <th>Code</th>
            <th>Color</th>
            {/*  */}
          </tr>
        </thead>
        <tbody>
          {dyeData.map((dye, index) => (
            <tr key={index}>
              <td>{dye.name}</td>
              <td>{dye.code}</td>
              <td>
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    backgroundColor: dye.color,
                    margin: '3px auto',
                    borderRadius: '4px',
              
                  }}
                ></div>
              </td>
              {/*
               */}
            </tr>
          ))}
        </tbody>
      </table>


          </div>
          <div id="REACTIVE HE DYES" style={{ overflowX: 'auto' }}>
            <h1>REACTIVE HE DYES</h1>
            <p>The reactive dyes provided by us impart excellent chemical properties and are manufactured by incorporating many technologies. These are available in undermentioned shades, chemical compositions and specifications.</p>
          
            <h1>Reactive 'HE' Dyes - Fastness Properties</h1>
      <table style={{ overflowX: 'auto' }} >
        <thead>
          <tr>
            <th>Dye Name</th>
            <th>Code</th>
            <th>Color</th>
            
          </tr>
        </thead>
        <tbody>
          {dyeData2.map((dye, index) => (
            <tr key={index}>
              <td>{dye.name}</td>
              <td>{dye.code}</td>
              <td className="color-cell">
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    backgroundColor: dye.color,
                    margin: '3px auto',
                    borderRadius: '4px',
                  }}
                ></div>
              </td>
             
              
            </tr>
          ))}
        </tbody>
      </table>
          </div>
          <div id="REACTIVE HOT DYES" style={{ overflowX: 'auto' }}>
            <h1>REACTIVE HOT DYES</h1>
            <p>The reactive dyes provided by us impart excellent chemical properties and are manufactured by incorporating many technologies. These are available in undermentioned shades, chemical compositions and specifications.</p>
            <h1>Reactive Hot Dyes - Fastness Properties</h1>
      <table style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
            <th>Dye Name</th>
            <th>Code</th>
            <th>Color</th>
            
          </tr>
        </thead>
        <tbody>
          {dyeData3.map((dye, index) => (
            <tr key={index}>
              <td>{dye.name}</td>
              <td>{dye.code}</td>
              <td className="color-cell">
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    backgroundColor: dye.color,
                    margin: '3px auto',
                    borderRadius: '4px',
                  }}
                ></div>
              </td>
             
              
            </tr>
          ))}
        </tbody>
      </table>
          
          </div>
          <div id="REACTIVE ME DYES" style={{ overflowX: 'auto' }}>
            <h1>REACTIVE ME DYES</h1>
            
            <h1>Reactive Me Dyes - Fastness Properties</h1>
      <table style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
            <th>Dye Name</th>
            <th>Code</th>
            <th>Color</th>
            
          </tr>
        </thead>
        <tbody>
          {dyeData4.map((dye, index) => (
            <tr key={index}>
              <td>{dye.name}</td>
              <td>{dye.code}</td>
              <td className="color-cell">
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    backgroundColor: dye.color,
                    margin: '3px auto',
                    borderRadius: '4px',
                  }}
                ></div>
              </td>
             
              
            </tr>
          ))}
        </tbody>
      </table>

          </div>
          

          <div id="REACTIVE VINYL SULPHONE BASE DYE" style={{ overflowX: 'auto' }}>
            <h1>REACTIVE VINYL SULPHONE BASE DYE</h1>
            


            <h1>Reactive Vinyl Sulphone Base Dye - Fastness Properties</h1>
      <table style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
            <th>Dye Name</th>
            <th>Code</th>
            <th>Color</th>
            
          </tr>
        </thead>
        <tbody>
          {dyeData5.map((dye, index) => (
            <tr key={index}>
              <td>{dye.name}</td>
              <td>{dye.code}</td>
              <td className="color-cell">
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    backgroundColor: dye.color,
                    margin: '3px auto',
                    borderRadius: '4px',
                  }}
                ></div>
              </td>
             
              
            </tr>
          ))}
        </tbody>
      </table>





          </div>
          

          <div id="REACTIVE PRINTING DYES" style={{ overflowX: 'auto' }}>
            <h1>REACTIVE PRINTING DYES</h1>
            
            <h1>Reactive Vinyl Sulphone Base Dye</h1>
      <table style={{ overflowX: 'auto' }}>
        <thead>
          <tr>
            <th>Dye Name</th>
            <th>Code</th>
            


          </tr>
        </thead>
        <tbody>
          {dyeData6.map((dye, index) => (
            <tr key={index}>
              <td>{dye.name}</td>
              <td>{dye.code}</td>
              <td className="color-cell">
                <div
                  style={{
                    width: '100px',
                    height: '60px',
                    backgroundColor: dye.color,
                    margin: '3px auto',
                    borderRadius: '4px',
                  }}
                ></div>
              </td>
             
              
            </tr>
          ))}
        </tbody>
      </table>
         
          </div>
          
        </div>
      </div>
    </div>
  );
};
