// eslint-disable-next-line
import React from 'react';

export default function Header(){
  return(
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid row">
        <div class="col-8 amalogo">
          <a class="navbar-brand" href="#">
            <img src="/images/logo.png" width="100%" height="30" class="d-inline-block align-top" alt=""></img>
          </a>
        </div>
        <div class="col-4 amalink">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#albumm">Products</a>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </div>
  )
}
