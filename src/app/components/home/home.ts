import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy{

  currentSlide = 0;

  slides = [
    {
      image: 'waterDrops.jfif',
      title: 'Forest & Water Conservation',
      subtitle: 'Save Forests with Every Drop',
      desc: 'A drop of water given to the forest today, becomes a river of life tomorrow'
    },
    {
      image: 'waterTesting.jpg',
      title: 'Defluoridate Water, Protect Lives',
      subtitle: 'Remove Fluoride, Restore health',
      desc: 'Every helping hand creates meaningful impact in society. Act Now: Save Water,save life'
    },
    {
      image: 'village_girl.png',
      title: 'Clean Drinking Water',
      subtitle: 'Hope Begins Here',
      desc: 'Bringing clean water to villages is bringing dignity to life.'
    }
  ];

  intervalId: any;

  ngOnInit() {
    this.autoSlide();
  }

  autoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) %
      this.slides.length;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}