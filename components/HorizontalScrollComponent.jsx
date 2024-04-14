import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { About } from './AboutComponent.jsx';
import { Songs } from './SongsComponent.jsx';

gsap.registerPlugin(ScrollTrigger);

export function HorizontalScrollComponent() {
  // コンポーネントがマウントされた時に実行されるuseEffectフック
  useEffect(() => {
    // `.panel`クラスを持つ要素を配列として取得
    const sections = gsap.utils.toArray(".panel");
    
    // `sections`に対してアニメーションを適用
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1) , // 横方向への移動距離を設定
      ease: "none", // アニメーションのイージングを無効にする
      scrollTrigger: { // スクロールトリガーの設定
        trigger: ".container", // アニメーションが起動するトリガーとなる要素
        pin: true, // スクロール中に`.container`要素を固定する
        invalidateOnRefresh: true, // ウィンドウのリサイズ時にアニメーションをリセットする
        anticipatePin: 1, // アニメーションが開始する前にピン操作を行う
        scrub: 0, // スクロールとアニメーションの同期をどの程度スムーズにするか（数字が大きいほどスムーズ）
        end: () => "+=" + document.querySelector(".container").offsetWidth // アニメーションの終了点を設定
      }
    });
  }, []); // 空の依存配列で、マウント時にのみ効果を実行する

  
  return (
    <div className="container">
      <section id="section2" className="panel s-1">
        <About />
      </section>

      <section id="section3" className="panel s-2">
        <Songs />
      </section>

      {/* <section id="section4" className="panel s-3">
      </section> */}

      <style jsx global>{`
        .container {
          display: flex;
          flex-wrap: nowrap;
          width: 100%;
          height: 100vh;
          scroll-snap-type: y mandatory;    
        }
        .panel {
          display: flex;
          position: relative;
          height: 100vh;
          width: 100vw;
        }

        .s-1 {
          z-index: 0;
          scroll-snap-align: end;
        }
        .s-2 {
          background-color: var(--blue);  
          scroll-snap-align: end;
        }
      `}</style>
    </div>
    
  );
}
