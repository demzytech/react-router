import React, { useState } from 'react';

const Poll = () => {
  const [votes, setVotes] = useState({
    fifa: 0,
    pes: 0,
  });

  const handleVote = (selectedGame) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [selectedGame]: prevVotes[selectedGame] + 1,
    }));
  };

  return (
    <div>
      <h2 className='htty'>FIFA vs PES Poll</h2>
      <div>
        <h3>FIFA</h3>
        <img
          src="https://play-lh.googleusercontent.com/40CpS7RLrl4UQKt1vdXtOzqwyYteyH3GdH5wTHhxpzikTZlaRhdWccS9Skma9H2a_6s"
          alt="FIFA"
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />
        <p>Rating: 9.5/10</p>
        <div className='deyu'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <p>
          Votes: {votes.fifa}
        </p>
        <button onClick={() => handleVote('fifa')} className='btn2222'><h4 className='tnt'>Vote FIFA</h4></button>
      </div>
      <div>
        <h3>PES</h3>
        <img
          src="https://img.utdstc.com/screen/64f/ec0/64fec0947d4d44580e93043c13f33da9bacc2ffa67b594a418d7c557a01be660:600"
          alt="PES"
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />
        <p>Rating: 9.0/10</p>
        <div className='deyu'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        <p>
          Votes: {votes.pes}
        </p>
        <button onClick={() => handleVote('pes')}>Vote PES</button>
      </div>
    </div>
  );
};

export default Poll;
