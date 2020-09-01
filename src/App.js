import React, { useEffect } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

// import UseApp from '@wellyshen/use-web-animations';
import { useRef } from 'react';
function App() {
  var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };
  
  var sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
  };

  const alice = useWebAnimations({ 
    keyframes: [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' },
      
      
    ],
    timing: {
      
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    }
  });


  
  const background1 = useWebAnimations({ 
    keyframes: sceneryFrames,
    timing:sceneryTimingBackground
  });



  const background2 = useWebAnimations({ 
    keyframes: sceneryFrames,
    timing:sceneryTimingBackground
  });

  
  const foreground1 = useWebAnimations({ 
    keyframes: sceneryFrames,
    timing:sceneryTimingForeground
  });


  const foreground2 = useWebAnimations({ 
    keyframes: sceneryFrames,
    timing:sceneryTimingForeground
  });


  

  React.useEffect(() => { 

    alice.getAnimation().updatePlaybackRate(0.3);
    alice.getAnimation().duration = 600;
    document.addEventListener("mousedown", (e) => {
      goFaster();
    });

    document.addEventListener("touchstart", (e) => {
      goFaster();

    });



    var sceneries = [background1.getAnimation(), background2.getAnimation(), foreground1.getAnimation(), foreground2.getAnimation()];

    var adjustBackgroundPlayback = function() {
      if (alice.getAnimation().playbackRate < .8) {
        sceneries.forEach(function(anim) {
          anim.playbackRate = alice.getAnimation().playbackRate*2;
          

        });
      } else if (alice.getAnimation().playbackRate > 1.2) {
        sceneries.forEach(function(anim) {
          anim.playbackRate = alice.getAnimation().playbackRate*2.5;
         

        });
      }  
    }
    
    
    setInterval( function() {
     
      if (alice.getAnimation().playbackRate > .4) {
        alice.getAnimation().playbackRate *= .9;    
      } 
      adjustBackgroundPlayback();
   
      
    }, 3000);
    
  
    var goFaster = function() {
      alice.getAnimation().updatePlaybackRate( alice.getAnimation().playbackRate *  1.1);
      adjustBackgroundPlayback();
    }
  
    

  }, [ alice.animate]);

  return (
    <div className="App">

      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img id="red-queen_and_alice_sprite" ref={alice.ref} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>
      <div className="scenery" id="foreground1" ref={foreground1.ref}>
        <img id="palm3" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" />
      </div>
      <div className="scenery" id="foreground2" ref={foreground2.ref}>
        <img id="bush" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" />
        <img id="w_rook_upright" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" />
      </div>
      <div className="scenery" id="background1" ref={background1.ref}>
        <img id="r_pawn_upright" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" />
        <img id="w_rook" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" />
        <img id="palm1" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" />
      </div>
      <div className="scenery" id="background2" ref={background2.ref}>
        <img id="r_pawn" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" />

        <img id="r_knight" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" />
        <img id="palm2" alt=" " src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" />
      </div>
    </div>

  );
}

export default App;
