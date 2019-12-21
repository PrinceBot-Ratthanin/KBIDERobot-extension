#include <Arduino.h>
#include "Adafruit_ADS1015.h"
#include "NKP_Servo.h"
#ifndef ALL
#define ALL 100
#endif

#define M1A 19
#define M1B 23
#define M2A 26
#define M2B 27


Adafruit_ADS1115 ads(0x49);
Servo servo1;

void KBRobot_Begin(){
  pinMode(M1A,OUTPUT);
  pinMode(M1B,OUTPUT);
  pinMode(M2A,OUTPUT);
  pinMode(M2B,OUTPUT);
  ledcSetup(6, 5000, 8);
  ledcSetup(7, 5000, 8);
  ledcSetup(4, 5000, 8);
  ledcSetup(5, 5000, 8);
  ledcAttachPin(M1A, 6);
  ledcAttachPin(M1B, 7);
  ledcAttachPin(M2A, 4);
  ledcAttachPin(M2B, 5);

  ads.setGain(GAIN_TWOTHIRDS);
  ads.begin();

}
void motor(int pin,int _direction, int _Speeds) {
  int _SpeedsA;
  int _SpeedsB;
  if (pin == 1) {
    _SpeedsA = abs(_Speeds);
    _SpeedsA = _SpeedsA * 2.55;
    if (_SpeedsA > 255){_SpeedsA = 255;}
    else if (_SpeedsA < -255){_SpeedsA = -255;}
    if (_direction == 1) {
      ledcWrite(6, 255 - abs(_SpeedsA));
      ledcWrite(7, 255);
    }
    else if (_direction ==2 ) {
      ledcWrite(6, 255);
      ledcWrite(7, 255 - abs(_SpeedsA));
    }
  }
  if (pin == 2) {
    _SpeedsB = abs(_Speeds);
    
    _SpeedsB = _SpeedsB * 2.55;
    if (_SpeedsB > 255){_SpeedsB = 255;}
    else if (_SpeedsB < -255){_SpeedsB = -255;}
    if (_direction == 1) {
      ledcWrite(4, 0);
      ledcWrite(5, abs(_SpeedsB));
    }
    else if (_direction == 2) {
      ledcWrite(4, abs(_SpeedsB));
      ledcWrite(5, 0);
    }
  }
}
int read_ADC(int pin){
	if(pin == 0){
		return ads.readADC_SingleEnded(0);
	}
	else if(pin == 1){
		return ads.readADC_SingleEnded(1);
	}
	else if(pin == 2){
		return ads.readADC_SingleEnded(2);
	}
	else if(pin == 3){
		return ads.readADC_SingleEnded(3);
	}
}
void servo_write(int angle){
	if (!(servo1.attached()))
      {
        servo1.attach(18);
      }
      servo1.write(angle);
}