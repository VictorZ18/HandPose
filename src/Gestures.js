import { GestureDescription, Finger, FingerCurl, FingerDirection } from "fingerpose";

const AGesture  = new GestureDescription("A");
const BGesture  = new GestureDescription("B");
const CGesture  = new GestureDescription("C");
const DGesture  = new GestureDescription("D");
const EGesture  = new GestureDescription("E");
const FGesture  = new GestureDescription("F");
const GGesture  = new GestureDescription("G");
const HGesture  = new GestureDescription("H");
const IGesture  = new GestureDescription("I");
const JGesture  = new GestureDescription("J");
const KGesture  = new GestureDescription("K");
const LGesture  = new GestureDescription("L");
const MGesture  = new GestureDescription("M");
const NGesture  = new GestureDescription("N");
const OGesture  = new GestureDescription("O");
const PGesture  = new GestureDescription("P");
const QGesture  = new GestureDescription("Q");
const RGesture  = new GestureDescription("R");
const SGesture  = new GestureDescription("S");
const TGesture  = new GestureDescription("T");
const UGesture  = new GestureDescription("U");
const VGesture  = new GestureDescription("V");
const WGesture  = new GestureDescription("W");
const XGesture  = new GestureDescription("X");
const YGesture  = new GestureDescription("Y");
const ZGesture  = new GestureDescription("Z");

//A

//Thumb
AGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
AGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

//Other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    AGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    AGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  }

//B

//Thumb
BGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
BGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

//Other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    BGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    BGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  }

//C

//Thumb
CGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
CGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

//Other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  CGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  CGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}

DGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
DGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

DGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
DGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  DGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  DGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//E
EGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
EGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

EGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
EGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  EGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  EGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//F
for (let finger of [Finger.Thumb, Finger.Index]) {
FGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}

FGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

FGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

FGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
FGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  FGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  FGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//G
GGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
GGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

GGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
GGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

GGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
GGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [Finger.Ring, Finger.Pinky]) {
  GGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  GGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}
//H
for(let finger of [Finger.Thumb, Finger.Index, Finger.Middle]) {
  HGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  HGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

for (let finger of [ Finger.Ring, Finger.Pinky]) {
  HGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  HGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
}

//I
IGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
IGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

IGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0); 
IGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  IGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  IGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//J
  JGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
  JGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

  JGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
  JGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);

for(let finger of [Finger.Index, Finger.Middle]) {
  JGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  JGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}

  JGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
  JGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

//K
  KGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
  KGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

  KGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
  KGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

  KGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  KGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

  KGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
  KGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

  KGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
  KGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

//L
LGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

LGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//M
MGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
MGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

MGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
MGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  MGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  MGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//N
NGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
NGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

NGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
NGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Index]) {
  NGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  NGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//O
OGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
OGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  OGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  OGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
}

//P
PGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
PGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

PGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
PGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

PGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
PGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

PGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
PGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

PGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
PGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1.0);

//Q
QGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
QGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

QGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);
QGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Index]) {
  QGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  QGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

//R
RGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
RGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

RGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
RGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

RGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
RGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

for (let finger of [Finger.Ring, Finger.Pinky]) {
  RGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  RGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//S
SGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
SGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

SGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
SGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [Finger.Middle, Finger.Ring]) {
  SGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  SGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

SGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
SGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

//T
TGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

TGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
TGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

for (let finger of [Finger.Middle, Finger.Ring]) {
  TGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  TGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

TGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
TGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

//U
UGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
UGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Index, Finger.Middle]) {
  UGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  UGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
  UGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  UGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//V
VGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
VGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

VGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
VGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

VGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
VGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

VGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
VGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

VGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
VGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);

//W
WGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
WGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

WGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
WGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

WGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
WGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

WGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
WGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

WGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
WGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

//X
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle]) {
  XGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  XGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
  XGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  XGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//Y
YGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
YGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

YGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
YGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  YGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  YGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

//Z
ZGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ZGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

ZGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
ZGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  ZGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  ZGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

export { AGesture, BGesture, CGesture, DGesture, EGesture, FGesture, GGesture, HGesture, IGesture, JGesture, KGesture, LGesture, MGesture, NGesture, OGesture, PGesture, QGesture, RGesture, SGesture, TGesture, UGesture, VGesture, WGesture, XGesture, YGesture, ZGesture };
