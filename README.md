Appliation Title: Ping-Pong
author: Melvin Gruschow
dated: Jan 20th, 2017

SPECS:

Main Behavior:
  The purpose of this application is to take positive integers entered by the user, count from 1 to said integer, replacing numbers divisible by 3 with the word ping, numbers divisible by 5 with the word pong, and numbers divisible by 15 with the word pingpong.

App will replace numbers divisible with 15, and replace them with the word ping pong.
  input: 15
  output: pingpong
  input: 30
  output: pingpong
    This process takes priority over other replacement processes as detailed below

App will replace numbers divisible by 5, and replace them with the word pong, only if they are not divisible by 15.
  input: 10
  output: pong
  input: 45
  output: pingpong

App will replace numbers divisible by 3, and replace them with the word ping, only if they are not divisible by 15, or 5.
  input: 9
  output: ping
  input: 60
  output: 15

App will handle single small whole number integers
  input: 1
  output: 1
  input: 2
  output: 1, 2

App will handle large whole number integers
  input: 100
  output: 1, 2, ping, 4, pong, 6, 7, 8, ping, pong, 11, ping, 13, 14, pingpong etc. to 100
