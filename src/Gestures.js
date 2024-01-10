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
AGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

//Other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    AGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    AGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  }

//B

//Thumb
BGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
BGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

//Other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    BGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
    BGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  }

//C

//Thumb
CGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
CGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

//Other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  CGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  CGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

DGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
DGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

for(let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  DGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  DGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
}

//E
EGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
EGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  EGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}

//F
for (let finger of [Finger.Thumb, Finger.Index]) {
FGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
FGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8);
}

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  FGesture.addCurl(finger, FingerCurl.NoCurl, 0.9);
  FGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);

}

//G
GGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
GGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
GGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
GGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.8);
GGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.8);

for(let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  GGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  GGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  GGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);

}

//H
for(let finger of [Finger.Index, Finger.Middle]) {
  HGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  HGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0);
  HGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  HGesture.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.8);
  HGesture.addDirection(finger, FingerDirection.DiagonalDownRight, 0.8);
}

for (let finger of [Finger.Thumb, Finger.Ring, Finger.Pinky]) {
  HGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  HGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//I
for (let finger of [Finger.Thumb, Finger.Pinky]) {
  IGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  IGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  IGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.8);
  IGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.8);
}

IGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  IGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  IGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//J
for (let finger of [Finger.Thumb, Finger.Pinky]) {
  JGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  JGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  JGesture.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.8);
  JGesture.addDirection(finger, FingerDirection.DiagonalDownRight, 0.8);
}

JGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  JGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  JGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//K
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle]) {
  KGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  KGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  KGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.8);
  KGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 0.8);
}

for(let finger of [Finger.Ring, Finger.Pinky]) {
  KGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  KGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//L
LGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
LGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
LGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.7);
LGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.7);

LGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
LGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);
LGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);

for(let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//M
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  MGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

//N
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  NGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

//O
OGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
OGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
OGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);


OGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
OGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
OGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);


for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  OGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  OGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.8);
  OGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.8);
}

//P
PGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
PGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 1.0);
PGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 1.0);
PGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 0.7);

PGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
PGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

PGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
PGesture.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);
PGesture.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1.0);
PGesture.addDirection(Finger.Middle, FingerDirection.VerticalDown, 0.7);

for (let finger of [Finger.Ring, Finger.Pinky]) {
  PGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  PGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

//Q
QGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
QGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

QGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
QGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  QGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  QGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  QGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

RGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
RGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
RGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

RGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
RGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  RGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  RGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  RGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

//S
SGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
SGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  SGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  SGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  SGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

//T
TGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
TGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

TGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
TGesture.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  TGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  TGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  TGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

//U
UGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
UGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Index, Finger.Middle]) {
  UGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  UGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

for (let finger of [Finger.Ring, Finger.Pinky]) {
  UGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  UGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  UGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

//V
VGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
VGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

VGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
VGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

VGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
VGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Ring, Finger.Pinky]) {
  VGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  VGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
  VGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

//W
WGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
WGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

WGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
WGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

WGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
WGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

WGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
WGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

WGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
WGesture.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

//X
XGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
XGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

XGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
XGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  XGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  XGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

//Y
YGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
YGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
YGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

YGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
YGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  YGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  YGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}

//Z


export { AGesture, BGesture, CGesture, DGesture, EGesture, FGesture, GGesture, HGesture, IGesture, JGesture, KGesture, LGesture, MGesture, NGesture, OGesture, PGesture, QGesture, RGesture, SGesture, TGesture, UGesture, VGesture, WGesture, XGesture, YGesture, ZGesture };
