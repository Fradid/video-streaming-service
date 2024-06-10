import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
})
export class VideoDetailComponent implements OnInit {
  videoId!: string;
  videoUrl!: string;
  videoAvailable: boolean = false;
  videoTitle!: string;
  description!: string;
  tags: Array<string> = [];
  likeCount: number = 0;
  dislikeCount: number = 0;
  viewCount: number = 0;
	showSubscribeButton: boolean = true;
	showUnSubscribeButton: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videoService: VideoService,
		private userService: UserService
  ) {
    this.videoId = this.activatedRoute.snapshot.params.videoId;
    this.videoService.getVideo(this.videoId).subscribe((data) => {
      this.videoUrl = data.videoUrl;
      this.videoAvailable = true;
      this.videoTitle = data.title;
      this.description = data.description;
      this.tags = data.tags;
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
      this.viewCount = data.viewCount;
    });
  }

  ngOnInit(): void {}

  likeVideo() {
    this.videoService.likeVideo(this.videoId).subscribe((data) => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    });
  }

  disLikeVideo() {
    this.videoService.disLikeVideo(this.videoId).subscribe((data) => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    });
  }

	subscribeToUser() {
		let userId = this.userService.getUserId();
		this.userService.subscribeToUser(userId).subscribe(data => {
			this.showSubscribeButton = false;
			this.showUnSubscribeButton = true;
		});
	}

	unSubscribeToUser() {
		let userId = this.userService.getUserId();
		this.userService.unSubscribeUser(userId).subscribe(data => {
			this.showSubscribeButton = true;
			this.showUnSubscribeButton = false;
		});
	}
}
