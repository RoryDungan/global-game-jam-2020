#!/bin/bash

for i in *.wav;
  do name=`echo "$i" | cut -d'.' -f1`
  echo "$name"
  ffmpeg -i "$i" -c:a libfdk_aac -b:a 128k "${name}.m4a"
done