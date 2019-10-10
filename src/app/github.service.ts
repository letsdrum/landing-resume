import { Injectable } from '@angular/core';
import { GitHubRepo } from './models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  apiUrl = 'https://api.github.com/users/letsdrum/repos'

  constructor(private httpClient: HttpClient) { }

  getRepos(){
    return this.httpClient.get<GitHubRepo[]>(this.apiUrl);
  }
}
