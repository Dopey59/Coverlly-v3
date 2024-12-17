'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function NewIn() {
  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Animation des lettres : Scale, Translate et Rotation
    tl.to('.letter', {
      scale: 1.2,
      rotation: 15,
      duration: 1,
      transformOrigin: 'center center',
      ease: 'power2.inOut',
      stagger: 0.2,
    })
      .to('.letter', {
        scale: 1,
        rotation: -15,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
      });
  }, []);

  return (
    <div
      ref={container}
      className='flex justify-center items-center h-96 text-white bg-zinc-800'
    >
      <svg width="600" height="200" viewBox="0 0 600 200">
        {/* Lettre 1 */}
        <text x="50" y="100" fontSize="60" className="letter" fill="white">
          C
        </text>
        {/* Lettre 2 */}
        <text x="130" y="100" fontSize="60" className="letter" fill="white">
          O
        </text>
        {/* Lettre 3 */}
        <text x="210" y="100" fontSize="60" className="letter" fill="white">
          V
        </text>
        {/* Lettre 4 */}
        <text x="290" y="100" fontSize="60" className="letter" fill="white">
          E
        </text>
        {/* Lettre 5 */}
        <text x="370" y="100" fontSize="60" className="letter" fill="white">
          R
        </text>
        {/* Lettre 6 */}
        <text x="450" y="100" fontSize="60" className="letter" fill="white">
          L
        </text>
        {/* Lettre 7 */}
        <text x="530" y="100" fontSize="60" className="letter" fill="white">
          Y
        </text>
      </svg>
    </div>
  );
}
