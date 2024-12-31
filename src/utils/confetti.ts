import confetti from 'canvas-confetti';

export const triggerRandomConfetti = () => {
  const count = 200;
  const defaults = {
    zIndex: 1000,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    const origin = {
      x: Math.random(),
      y: Math.random() * 0.5 // Keep it in upper half of screen
    };

    confetti({
      ...defaults,
      origin,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};