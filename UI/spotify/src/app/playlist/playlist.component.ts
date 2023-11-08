import { Component,OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
playList=[""];
constructor(private httpClient: HttpClient) {

 }

ngOnInit(): void {
this.callPlayList();
}
callPlayList()
{
  this.httpClient.get('http://localhost:3000/playlist').subscribe(res=>{
    this.playList=res;
  });
  console.log()
}


}
