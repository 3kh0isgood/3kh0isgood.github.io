var Game=function(){"use strict";var e=function(){this.lab=new GameObjects.Lab,this.research=null,this.workers=null,this.upgrades=null,this.achievements=null,this.allObjects={lab:this.lab},this.loaded=!1};return e.prototype.load=function(){if(!this.loaded){this.research=Helpers.loadFile("json/research.json"),this.workers=Helpers.loadFile("json/workers.json"),this.upgrades=Helpers.loadFile("json/upgrades.json"),this.achievements=Helpers.loadFile("json/achievements.json");var e=this,s=function(s,t){var a=new s(t);return e.allObjects[a.key]=a,a};for(var t in this.research=this.research.map((function(e){return s(GameObjects.Research,e)})),this.workers=this.workers.map((function(e){return s(GameObjects.Worker,e)})),this.upgrades=this.upgrades.map((function(e){return s(GameObjects.Upgrade,e)})),this.achievements=this.achievements.map((function(e){return s(GameObjects.Achievement,e)})),this.allObjects){this.allObjects[t].loadState(ObjectStorage.load(t))}this.loaded=!0}},e.prototype.save=function(){for(var e in this.allObjects)ObjectStorage.save(e,this.allObjects[e].state)},{Game:e}}();
