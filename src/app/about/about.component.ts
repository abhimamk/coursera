import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private _getLeaders:LeaderService,private route:ActivatedRoute) { }
leader1:Leader[];
  ngOnInit() {
    // this.leader1=this._getLeaders.getLeaders();
      this._getLeaders.getLeaders().then(leader1=>this.leader1=leader1)
  }
  // this.dish=this.dishServices.getDish(id);
}
