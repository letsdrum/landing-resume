import { Component, OnInit } from '@angular/core';
import { GitHubRepo } from '../models/model';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  repos: GitHubRepo[];

  constructor(private dataService: GithubService) { }

  ngOnInit() {
    return this.dataService.getRepos()
    .subscribe(reposFromGitHub => this.repos = reposFromGitHub)
  }

}
