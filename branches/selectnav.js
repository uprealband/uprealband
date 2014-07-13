




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>lukaszfiszer/selectnav.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="lukaszfiszer/selectnav.js" name="twitter:title" /><meta content="selectnav.js - Responsive drop-down menu for mobiles and small screen devices. Lightweight (1.5kb) and library agnostic" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/1201711?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/1201711?s=400" property="og:image" /><meta content="lukaszfiszer/selectnav.js" property="og:title" /><meta content="https://github.com/lukaszfiszer/selectnav.js" property="og:url" /><meta content="selectnav.js - Responsive drop-down menu for mobiles and small screen devices. Lightweight (1.5kb) and library agnostic" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="B4FC572B:5936:A2C8783:53C2B8BC" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="ZxzHjLfzPV2h702PqVwm3IHw5fb60x/gTBfzaxDnSV/az+ufzDbm98P2Wn4hq81k+K9rump5NwA74/Ih3a14yw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-b9a1c847ef551948680288a22129b0083ad12de8.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-cd73c50d8062a9bdd5ac1d384af1ff86f1fca2ec.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="abce031472507f3d0815b88fb2b03a35">

      
  <meta name="description" content="selectnav.js - Responsive drop-down menu for mobiles and small screen devices. Lightweight (1.5kb) and library agnostic" />


  <meta content="1201711" name="octolytics-dimension-user_id" /><meta content="lukaszfiszer" name="octolytics-dimension-user_login" /><meta content="3581676" name="octolytics-dimension-repository_id" /><meta content="lukaszfiszer/selectnav.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3581676" name="octolytics-dimension-repository_network_root_id" /><meta content="lukaszfiszer/selectnav.js" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/lukaszfiszer/selectnav.js/commits/master.atom" rel="alternate" title="Recent Commits to selectnav.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
<div class="unsupported-browser">
  <div class="container clearfix">
    <form accept-charset="UTF-8" action="/site/dismiss_unsupported_browser" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="7c2jsZpiMnh4t4woZG3mU+UgB/VsjtUwyKPuGb9myNNsyT3UMbpkyKJqYtExEe2JDGwYgVFkPM+7WuBcwzLQdw==" /></div>
      <button class="button danger">Ignore</button>
</form>    <a href="https://help.github.com/articles/supported-browsers" class="button">Learn more</a>

      <h5>Please note that GitHub no longer supports Internet Explorer versions 7 or 8.</h5>
      <p>We recommend upgrading to the latest <a href="http://windows.microsoft.com/ie">Internet Explorer</a>, <a href="https://chrome.google.com">Google Chrome</a>, or <a href="https://mozilla.org/firefox/">Firefox</a>.</p>
      <p>If you are using IE 9 or later, make sure you <a href="http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer">turn off "Compatibility View"</a>.</p>
  </div>
</div>

      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Flukaszfiszer%2Fselectnav.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
          <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
    data-repo="lukaszfiszer/selectnav.js"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="lukaszfiszer/selectnav.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Flukaszfiszer%2Fselectnav.js"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/lukaszfiszer/selectnav.js/stargazers">
      263
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Flukaszfiszer%2Fselectnav.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/lukaszfiszer/selectnav.js/network" class="social-count">
        86
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/lukaszfiszer" class="url fn" itemprop="url" rel="author"><span itemprop="title">lukaszfiszer</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/lukaszfiszer/selectnav.js" class="js-current-repository js-repo-home-link">selectnav.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline with-full-navigation ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/lukaszfiszer/selectnav.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /lukaszfiszer/selectnav.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/lukaszfiszer/selectnav.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /lukaszfiszer/selectnav.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>13</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/lukaszfiszer/selectnav.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /lukaszfiszer/selectnav.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/lukaszfiszer/selectnav.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /lukaszfiszer/selectnav.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/lukaszfiszer/selectnav.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /lukaszfiszer/selectnav.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/lukaszfiszer/selectnav.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /lukaszfiszer/selectnav.js/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/lukaszfiszer/selectnav.js.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/lukaszfiszer/selectnav.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/lukaszfiszer/selectnav.js" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/lukaszfiszer/selectnav.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save lukaszfiszer/selectnav.js to your computer and use it in GitHub Desktop." aria-label="Save lukaszfiszer/selectnav.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/lukaszfiszer/selectnav.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download lukaszfiszer/selectnav.js as a zip file"
                   title="Download lukaszfiszer/selectnav.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<span id="js-show-full-navigation"></span>

<div class="repository-meta js-details-container ">
    <div class="repository-description js-details-show">
      <p>Responsive drop-down menu for mobiles and small screen devices. Lightweight (1.5kb) and library agnostic</p>
    </div>

    <div class="repository-website js-details-show">
      <p><a href="http://lukaszfiszer.github.com/selectnav.js/" rel="nofollow">http://lukaszfiszer.github.com/selectnav.js/</a></p>
    </div>


</div>

<div class="capped-box overall-summary ">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/lukaszfiszer/selectnav.js/commits/master">
            <span class="num">
              <span class="octicon octicon-history"></span>
              14
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/lukaszfiszer/selectnav.js/branches">
          <span class="num">
            <span class="octicon octicon-git-branch"></span>
            2
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/lukaszfiszer/selectnav.js/releases">
          <span class="num">
            <span class="octicon octicon-tag"></span>
            0
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/lukaszfiszer/selectnav.js/graphs/contributors">
    <span class="num">
      <span class="octicon octicon-organization"></span>
      2
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/lukaszfiszer/selectnav.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">100%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="tooltipped tooltipped-s" aria-label="Show language statistics">
    <a href="#"
     class="repository-lang-stats-graph js-toggle-lang-stats"
     style="background-color:#f1e05a">
  <span class="language-color" style="width:100%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    </a>
  </div>



<div class="file-navigation in-mid-page">
  <a href="/lukaszfiszer/selectnav.js/find/master"
        class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s right"
        data-pjax
        data-hotkey="t"
        aria-label="Quickly jump between files">
    <span class="octicon octicon-list-unordered"></span>
  </a>
    <a href="/lukaszfiszer/selectnav.js/compare" aria-label="Compare, review, create a pull request" class="minibutton compact primary tooltipped tooltipped-s" aria-label="Compare &amp; review" data-pjax>
      <span class="octicon octicon-git-compare"></span>
    </a>

  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/lukaszfiszer/selectnav.js/tree/gh-pages"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/lukaszfiszer/selectnav.js/tree/master"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->



  <div class="breadcrumb"><span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/lukaszfiszer/selectnav.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">selectnav.js</span></a></span></span><span class="separator"> / </span><form action="/login?return_to=%2Flukaszfiszer%2Fselectnav.js" aria-label="Sign in to make or propose changes" class="js-new-blob-form tooltipped tooltipped-e new-file-link" method="post"><span aria-label="Sign in to make or propose changes" class="js-new-blob-submit octicon octicon-plus" data-test-id="create-new-git-file" role="button"></span></form></div>
</div>




  
  <div class="commit commit-tease js-details-container" >
    <p class="commit-title ">
        <a href="/lukaszfiszer/selectnav.js/commit/538237c7c5e95736fc376f4efc3e40f5b98eecc5" class="message" data-pjax="true" title="Added first unit tests with Karma

* created package.json with dev dependencies
* added karma configuration file
* added test files
* added gitignore">Added first unit tests with Karma</a>
        <span class="hidden-text-expander inline"><a href="#" class="js-details-target">…</a></span>
    </p>
      <div class="commit-desc"><pre>* created package.json with dev dependencies
* added karma configuration file
* added test files
* added gitignore</pre></div>
    <div class="commit-meta">
      <button aria-label="Copy SHA" class="js-zeroclipboard zeroclipboard-link" data-clipboard-text="538237c7c5e95736fc376f4efc3e40f5b98eecc5" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
      <a href="/lukaszfiszer/selectnav.js/commit/538237c7c5e95736fc376f4efc3e40f5b98eecc5" class="sha-block" data-pjax>latest commit <span class="sha">538237c7c5</span></a>

      <div class="authorship">
        <img alt="Łukasz Fiszer" class="gravatar js-avatar" data-user="1201711" height="20" src="https://avatars1.githubusercontent.com/u/1201711?s=140" width="20" />
        <span class="author-name"><a href="/lukaszfiszer" rel="author">lukaszfiszer</a></span>
        authored <time class="updated" datetime="2014-02-21T16:07:04+01:00" is="relative-time">February 21, 2014</time>

      </div>
    </div>
  </div>

  <div class="file-wrap">
    <table class="files" data-pjax>

      
<tbody class=""
  data-url="/lukaszfiszer/selectnav.js/file-list/master"
  data-deferred-content-error="Failed to load latest commit information.">

    <tr>
      <td class="icon">
        <span class="octicon octicon-file-directory"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/lukaszfiszer/selectnav.js/tree/master/test" class="js-directory-link" id="098f6bcd4621d373cade4e832627b4f6-29df03465b64595ed9f4d895bcbbbe56f8e05a20" title="test">test</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/lukaszfiszer/selectnav.js/commit/538237c7c5e95736fc376f4efc3e40f5b98eecc5" class="message" data-pjax="true" title="Added first unit tests with Karma

* created package.json with dev dependencies
* added karma configuration file
* added test files
* added gitignore">Added first unit tests with Karma</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-02-21T15:07:04Z" is="time-ago">February 21, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/lukaszfiszer/selectnav.js/blob/master/.gitignore" class="js-directory-link" id="a084b794bc0759e7a6b77810e01874f2-3c3629e647f5ddf82548912e337bea9826b434af" title=".gitignore">.gitignore</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/lukaszfiszer/selectnav.js/commit/538237c7c5e95736fc376f4efc3e40f5b98eecc5" class="message" data-pjax="true" title="Added first unit tests with Karma

* created package.json with dev dependencies
* added karma configuration file
* added test files
* added gitignore">Added first unit tests with Karma</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-02-21T15:07:04Z" is="time-ago">February 21, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/lukaszfiszer/selectnav.js/blob/master/LICENCE" class="js-directory-link" id="ca5f65a859f411ec70ddb3fddf267e80-3e6c12884cc121b4029bf37eccc97e77a628f230" title="LICENCE">LICENCE</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/lukaszfiszer/selectnav.js/commit/a28ae13118944aef85812bc0edaa538c2b930185" class="message" data-pjax="true" title="MIT Licence added">MIT Licence added</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2012-06-12T14:35:51Z" is="time-ago">June 12, 2012</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/lukaszfiszer/selectnav.js/blob/master/README.md" class="js-directory-link" id="04c6e90faac2675aa89e2176d2eec7d8-765cfec2ab56d03167c40cbd066e7acad35f4bcd" title="README.md">README.md</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/lukaszfiszer/selectnav.js/commit/31499765cf08edceb510cb2bf8d193dd4ad0bd4a" class="message" data-pjax="true" title="Correcting small typos">Correcting small typos</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2012-06-18T10:17:59Z" is="time-ago">June 18, 2012</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/lukaszfiszer/selectnav.js/blob/master/karma.conf.js" class="js-directory-link" id="a2a3b7b0c9c3b4b93b4aebf4e3ec3cfb-5f7000708ebfc99f541a95a8effeea2143e2ed4b" title="karma.conf.js">karma.conf.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/lukaszfiszer/selectnav.js/commit/538237c7c5e95736fc376f4efc3e40f5b98eecc5" class="message" data-pjax="true" title="Added first unit tests with Karma

* created package.json with dev dependencies
* added karma configuration file
* added test files
* added gitignore">Added first unit tests with Karma</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-02-21T15:07:04Z" is="time-ago">February 21, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/lukaszfiszer/selectnav.js/blob/master/package.json" class="js-directory-link" id="b9cfc7f2cdf78a7f4b91a753d10865a2-7a5999a9449c78958bea91346b366948f222dda5" title="package.json">package.json</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/lukaszfiszer/selectnav.js/commit/538237c7c5e95736fc376f4efc3e40f5b98eecc5" class="message" data-pjax="true" title="Added first unit tests with Karma

* created package.json with dev dependencies
* added karma configuration file
* added test files
* added gitignore">Added first unit tests with Karma</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-02-21T15:07:04Z" is="time-ago">February 21, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/lukaszfiszer/selectnav.js/blob/master/selectnav.js" class="js-directory-link" id="27b570cf35f4f0058c5341be7e76ad1f-22ecccb4d8b336663a444938610423c9691ac759" title="selectnav.js">selectnav.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/lukaszfiszer/selectnav.js/commit/538237c7c5e95736fc376f4efc3e40f5b98eecc5" class="message" data-pjax="true" title="Added first unit tests with Karma

* created package.json with dev dependencies
* added karma configuration file
* added test files
* added gitignore">Added first unit tests with Karma</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2014-02-21T15:07:04Z" is="time-ago">February 21, 2014</time></span>
      </td>
    </tr>
    <tr>
      <td class="icon">
        <span class="octicon octicon-file-text"></span>
        <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
      </td>
      <td class="content">
        <span class="css-truncate css-truncate-target"><a href="/lukaszfiszer/selectnav.js/blob/master/selectnav.min.js" class="js-directory-link" id="bcde06021b470d0347abbdeb1ad6db51-49c6b8a7d93933eac5ddcc8a595f2c28cafc2da9" title="selectnav.min.js">selectnav.min.js</a></span>
      </td>
      <td class="message">
        <span class="css-truncate css-truncate-target ">
          <a href="/lukaszfiszer/selectnav.js/commit/7f6013cb81e241c0374f67ed8b44f9e54af082aa" class="message" data-pjax="true" title="Regenerate minified version">Regenerate minified version</a>
        </span>
      </td>
      <td class="age">
        <span class="css-truncate css-truncate-target"><time datetime="2013-03-08T17:57:20Z" is="time-ago">March 08, 2013</time></span>
      </td>
    </tr>
</tbody>

    </table>
  </div>


  <div id="readme" class="clearfix announce instapaper_body md">
    <span class="name">
      <span class="octicon octicon-book"></span>
      README.md
    </span>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="user-content-about" class="anchor" href="#about" aria-hidden="true"><span class="octicon octicon-link"></span></a>About</h1>

<p>SelectNav.js is a JavaScript plugin that lets you convert your website navigation into a select drop-down menu. Used together with media queries it helps you to create a space saving, responsive navigation for small screen devices.</p>

<p>Inspired by <a href="http://tinynav.viljamis.com/">TinyNav.js</a>, it was rewritten from scratch to become jQuery independent and customizable.</p>

<p>Questions, comments, bugs? Feel free to ping me on Twitter - <a href="http://twitter.com/#!/lukaszfiszer">@lukaszfiszer</a>.</p>

<h1>
<a name="user-content-features" class="anchor" href="#features" aria-hidden="true"><span class="octicon octicon-link"></span></a>Features</h1>

<ul class="task-list">
<li>Independent - no external library or other dependecies</li>
<li>Ligthweight - only 1.5KB minified and 0.8KB minified+gziped</li>
<li>Customizable - to make it suit your needs</li>
<li>Compatible - tested with IE 6+, Firefox 3.6+, Chrome 4+, Safari 3+, Mobile Safari iOS 3.2+, Android 2.3+ Browser, Opera Mobile, Opera Mini.</li>
</ul><h1>
<a name="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Usage</h1>

<h2>
<a name="user-content-html-structure" class="anchor" href="#html-structure" aria-hidden="true"><span class="octicon octicon-link"></span></a>HTML structure</h2>

<div class="highlight highlight-html"><pre><span class="nt">&lt;ul</span> <span class="na">id=</span><span class="s">"nav"</span><span class="nt">&gt;</span>
<span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"homepage.html"</span><span class="nt">&gt;</span>Homepage<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
<span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"about.html"</span> <span class="na">class=</span><span class="s">"active"</span><span class="nt">&gt;</span>About us<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
<span class="nt">&lt;li&gt;&lt;a</span> <span class="na">href=</span><span class="s">"contact.html"</span><span class="nt">&gt;</span>Contact<span class="nt">&lt;/a&gt;&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span>
</pre></div>

<p>Selectnav.js works with all navigation in form of ul and li lists that follow the example above.</p>

<p>The <code>id</code> property will be later passed to the JavaScript function.</p>

<p>Do you have nested lists in your menu? Not a problem - just make sure they are proprerly structured!</p>

<h2>
<a name="user-content-css" class="anchor" href="#css" aria-hidden="true"><span class="octicon octicon-link"></span></a>CSS</h2>

<div class="highlight highlight-css"><pre><span class="c">/* default style */</span>
<span class="nc">.selectnav</span> <span class="p">{</span> <span class="k">display</span><span class="o">:</span> <span class="k">none</span><span class="p">;</span> <span class="p">}</span>

<span class="c">/* small screen */</span>
<span class="k">@media</span> <span class="nt">screen</span> <span class="nt">and</span> <span class="o">(</span><span class="nt">max-width</span><span class="o">:</span> <span class="nt">600px</span><span class="o">)</span> <span class="p">{</span>
  <span class="nc">.js</span> <span class="nf">#nav</span> <span class="p">{</span> <span class="k">display</span><span class="o">:</span> <span class="k">none</span><span class="p">;</span> <span class="p">}</span>
  <span class="nc">.js</span> <span class="nc">.selectnav</span> <span class="p">{</span> <span class="k">display</span><span class="o">:</span> <span class="k">block</span><span class="p">;</span> <span class="p">}</span>
<span class="p">}</span>
</pre></div>

<p>SelectNav.js adds a js class to the html element. Thanks to this, when JavaScript is disabled the default navigation will be visible.</p>

<h2>
<a name="user-content-javascript" class="anchor" href="#javascript" aria-hidden="true"><span class="octicon octicon-link"></span></a>JavaScript</h2>

<div class="highlight highlight-javascript"><pre><span class="o">&lt;</span><span class="nx">script</span> <span class="nx">src</span><span class="o">=</span><span class="s2">"selectnav.min.js"</span><span class="o">&gt;&lt;</span><span class="err">/script&gt;</span>
<span class="o">&lt;</span><span class="nx">script</span><span class="o">&gt;</span><span class="nx">selectnav</span><span class="p">(</span><span class="s1">'nav'</span><span class="p">);</span> <span class="o">&lt;</span><span class="err">/script&gt;</span>
</pre></div>

<p>The script must be fired after the the DOM is ready. You can achieve this either by putting those two lines at the bottom of your page, either, what is recommended, by wrapping them in a <a href="https://github.com/ded/domready">domReady function</a>.</p>

<p>Because the script depends on @media property of CSS3, it is highly recommended to use it together with a <a href="https://github.com/scottjehl/Respond">media query polyfill</a>. If you haven't included it yet into your design, don't wait a second - download it right way and enjoy a responsive layout on IE 6-8 and some older mobile browsers.</p>

<h2>
<a name="user-content-options" class="anchor" href="#options" aria-hidden="true"><span class="octicon octicon-link"></span></a>Options...</h2>

<p>The <code>selectnav</code> function takes as the second argument a key-value list of the following optional parameters:</p>

<ul class="task-list">
<li>
<code>activeclass</code> <em>string</em> - contains the name of the active class. SelectNav.js will mark the correponding element with "selected" attribute. Change to an empty string or to false if you want to disable this feature. <strong>Default</strong> 'active'</li>
<li>
<code>autoselect</code> <em>boolean</em> - instead of explicitly setting an active class, you can let SelectNav.js to automatically determine the active element. <strong>Default</strong> true</li>
<li>
<code>nested</code> <em>boolean</em> - SelectNav.js can handle multi-level, nested menus. Set this to false if you want only the uppermost level of the navigation to appear in the dropdown menu. <strong>Default</strong> true</li>
<li>
<code>indent</code> <em>char</em> - used together with nested attribute, it lets you specify the indent symbol. <strong>Default</strong> →</li>
<li>
<code>label</code> <em>string</em> - set a label that will be the first element of the drop-down menu. <strong>Default</strong> - Navigation -</li>
</ul><h1>
<a name="user-content-demos" class="anchor" href="#demos" aria-hidden="true"><span class="octicon octicon-link"></span></a>Demos</h1>

<p>See <a href="http://lukaszfiszer.github.com/selectnav.js/">http://lukaszfiszer.github.com/selectnav.js/</a> for live demo and examples</p>

<h1>
<a name="user-content-ender" class="anchor" href="#ender" aria-hidden="true"><span class="octicon octicon-link"></span></a>Ender</h1>

<p>You want to use it with <a href="http://ender.no.de/">Ender</a>? Not a problem:</p>

<pre><code>ender add selectnav.js
</code></pre>

<p>Don't know what Ender is? <a href="http://ender.no.de/">Find out</a> and fell in love!</p></article>
  </div>


        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03191s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


  </body>
</html>

