import { useState } from "react";
import ProfileFallback from "./ProfileFallback.jsx";

// LinkedIn CDN URLs can expire; a failed request displays the original SVG.
const linkedInPhotoUrl = "https://media.licdn.com/dms/image/v2/D4E03AQFubf1R4H44jQ/profile-displayphoto-shrink_800_800/B4EZc37r.MHIAc-/0/1748990083963?e=1792022400&v=beta&t=smDGcrFMbfqGZ6wRzEBkHeMtWGg8YwI9uuNReO42g_E";
const particleCount = 64;

export default function ProfilePortrait() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <a className="profile-portrait" href="https://www.linkedin.com/in/jordanhaigh/" target="_blank" rel="noopener noreferrer" aria-label="View Jordan Haigh’s LinkedIn profile">
      {photoFailed ? <ProfileFallback /> : (
        <img src={linkedInPhotoUrl} alt="Jordan Haigh" width="799" height="800" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setPhotoFailed(true)} />
      )}
      <span className="portrait-particles" aria-hidden="true">
        {Array.from({ length: particleCount }, (_, index) => (
          <span key={index} style={{
            "--angle": `${index * 360 / particleCount}deg`,
            "--outset": `${1 + index % 3}px`,
            "--particle-size": `${1.25 + (index % 4) * 0.25}px`,
            "--travel": `${24 + (index % 5) * 5}px`,
            "--duration": `${2.4 + (index % 5) * 0.3}s`,
            "--delay": `${index * -0.37}s`,
          }} />
        ))}
      </span>
    </a>
  );
}
