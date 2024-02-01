import Carousel from 'react-bootstrap/Carousel';

function Dark() {
  return (
    <Carousel data-bs-theme="dark" className='demi'>
      <Carousel.Item>
        <img
          className="Dimg5"
          src="https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='game1'>
            <div>
              <img className='Logo1' src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div>
            <h5 className='we'>Valorant - Riot Game</h5>
          <p>
            <s className='strike'>BORING</s><b> Action, Tactical shooter</b> 
          </p>
          <button className="Btn3">Install <i className="fa-solid fa-download"></i></button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Dimg4"
          src="https://overgear.com/guides/wp-content/uploads/2023/05/revenant-apex-legends.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className='game1'>
            <div>
              <img className='Logo1' src="https://assets-prd.ignimgs.com/2023/02/16/apexrevelry-1676588335122.jpg" alt="" />
            </div>
            <div>
            <h5 className='we'>Apex Legend - The next evolution of Hero Shooter</h5>
          <p>
            <s className='strike'>BORING</s><b> Action, Tactical shooter</b> 
          </p>
          <button className="Btn3">Install <i className="fa-solid fa-download"></i></button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="Dimg3"
          src="https://images.ctfassets.net/vfkpgemp7ek3/1240004181/8b1fdb1ab8330de77e0f8ecf1f5757c1/call-of-duty-mobile-hero-a.jpg?w=1440"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className='game1'>
            <div>
              <img className='Logo1' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgZHR4cHBwaGRwYHh4cHBUaHBwaHBwcIS4nHR4rHxwYJjgmKy8xNTY1GiQ7QDszPy40NTEBDAwMEA8QHhISGjQhJCs0NDQ0NDQ0NDQxNDQ0NDQ0MTQ0NDQ0NDQ0NDE0MTQxNDY0NDQxNDQ0NDQ0NDQ0NDQ0Mf/AABEIAPMAzwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAEAQAAIBAgQDBgQEBAUBCQAAAAECEQADBBIhMUFRYQUicYGRoQYTMvBSscHhQmJy0RQjgpLxBxUWM3OUorLC0v/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHxEBAQEBAAMAAgMAAAAAAAAAAAERAiExQQMSIlFh/9oADAMBAAIRAxEAPwDxqkpaKApKWkNAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQLRRRQJS0UlAUUtJQFFFFAVIwmEe42W2jO28KCTHMxsOtTux+yxcDXLjFLFuM7KJZi3027YO9xoPQAEnaDrUwTvbysvyLB1XDoSs6EZrz/AFO3idOm1BmcP8PywW5iLNskTGY3G6CLYYSZGk1J/wC7tnjiX/8ATXI9Z22rRLZVQVUBV7pgCBo410FQcTehm11n9AP1q4mqC52Axn5V23cj+EMUf/a4HoCaqb1lkJVlKsNwwIPoa1TXVfRgDG39wdwfCu72VlCXhKbI+gZCebH+H251j9suN4xtFT+0+z2stDag6qRsR+h2kdagVpkUUUUBRRRQFFFFAUUUUBRRRQLRRRQFFFFAUlFLQJRRVj2VbOcXMmZbTKzAmAQGByyeJg6AEwGMQDQbfA9nhCto/ThlBYfixNxQzseZRSqCeVS8ZczHST0AmPE7CmuzWLW87/U7O7cZLuTv0ED7iu7iaQNOXOtZjOqzE3DB0ggHcngskd2fsVU428wYyBvzPHXlVt2koIDdYPmpFVGLtTBOxA4cRIqVYrmvkH/nlV1griuuU65gQRVE2HlZUFv6YI9jVh2VcIIHsdx1rn3PDfNADMGwrrmyj/LbQEGRl14gzHQHpWcrYdq2n+YHQTlWCQZiDmDRxET5NVL2xZAaUQ5ZPe14xCtpAMgkcww4QA560sxU0UUVtkUUUUBRRRQFFFFAUUUUCiikpaAooooCiikoFrT9k9l3hhrtx0C2XWUZwD3swQMBv9LN3o4aVmK9R7cvBOz7aad22g33Pyigj/UV05SaqIuBxi/4dHbkBCjUtlBIHqPCRVZc7RDyQkgad5391VsvnFL2fca5Ztycq21CoFEaZmVix4ksx5aCq/D4Uo7qJ0MjyY/3FOrW/wAc53LNO2LRuNlygAgknPcVVCqWZicxAVQCx0J04mq7E3Mv0BAODd5mOn4n1WOgXer/ALD7OZy+ZGNoFfnNmy5bQfMVmZzOyhRH83OmvjKzbXEFLaqoAXMiJkWCoKOo/iJUqZ4yN96xNb/JOZ1nKjtqHBzHMdIkliN54132fbeRkJBB2OqnxFcWsqkyQNPXWpeGxWQZgDMGNNzvvw2qXfh43yO3cUgFv5TtmI76wRldSQQG2ZZ26KJmrD4Tur/i8PnGZHPy3U6hpU24IO8qU8zWVxSkQDuB/ep/ZeJKuhG6urrrH06sJ65U9KWeMY3yi9rYQWr1y2pzKrEK34lmVbzWD51CrZfH3ZyriSwbKtySvd4TmWSP5GSstjMI1tgG4gMCNiDxHmCPEGrz1slLMqLRRRWmRRRRQFFFFAUUUUBRRRQLRRRQFFFFACtj8U46ctsgKqERxLd0a+A29ayVl8rKxEwQY8DNab4kQMwj/T5iff8ASqjSf9PezExCurNATMRyaWfQ9NNutbO58J4Bbnfulf5VIEnUmSQW2K7Hh6eZ/wDTztM2rjd4gcY5EfsfWtG4LOHd5S44zAfxD5hMsBuJB58DVzwm5Wq+L7uHw2ES1aUKrsrbkk5ROZmJJdvp1M7DkK8hv9ozeDspKEZJIkEqqgCenc9etemfGWAXEqgD5SO6swRLMoy777mf5a8/+LsEU+WqjKq5jr+J2Uk+gUeVSzwsrq+9sKcw7nCIPlrtM1Bwt1GMRtETofsVV4jFsxBaCVCqNNIVQukc4k9San22USARAPdJMAw0aMYB48eVYsyOkuq/tbD5H5g6jWa4wjKCCwJBDAxvDKVkTxEz5VI7ZYkgkEbxNV6PApPSX21fxlj/AJljCJociEzxAZLRynpmzHzrrE9nNewVtlEvblgBuUZ3zAde6D5HnWcvWnLIrAiQMpOoyzEqdiNNxyrW9kY8qMnCAFHHRSAT6zWOt5kxqZ1brCUlW/xNhRbxDqohSQy8oYAmOkyPKqmuk8zWLMuEoooqoKKKKAooooCiiigKWkpRQFFFFAVfYm78xEYH6QoP9SgA+9UNdJcI2JHgYqypYuuxO7eI4Mpjygj2mvQcBgxfsBVYLBAbjqOfufOvLMHiCtxWJOhG54bH2r0PsHHi2TnMA94awOXDc7xVnpm+1g6AJD2VLA5c2aCCFIzxoR9M9c676msj8RXAyFVWCjA66SDm7w9F962XzbeIMSNGYgx3u8pAg8hy8Noqk+IexUzZgO6isxkyrAuoAB4QGmP3pVjEpEiO9J2AnynjtVliYRFWYIB3PnFMs6IJ0PKPD94qBjcXnjkNq52a6S44/wAWynuMV5wYB8Rx86Vca8gxbJ/8q2fUZYPnUM1YYGxqOf5fvVuIlWMOzaxHA8I1JIHmTV3g1IXujUbmJAjn1qDecgZU4DU+A2HWnOzcU6EESFGkc65dbY6TIf8AiUK+GRzq6vvzVhr7hTWOrfYrGW76sjqVDASVgGQQZ2jccayvanZLWu8CGQ7MNCOjDgfar+O5Mqdz7FVRRRXVzFFFFAUUUUBRRRQFFFFAtFJS0BXSITsCfATSAVouzMOoWBrOrafVHAfy/n0oM5FaQYhwgkAkATBB6HznemMQZzyFD2+8pgAFW+kjqJ08RyqJg8RCEakg+xH7H1rUSpqdqshkSD0NcY3t+7cXISAsZTE7GJ16kCqq6xJ2pgmpaSO2euCa7tWmYhVUsTsACSfACnlwrBoYEEbjY+B5eG9RRhrE6ny69fCpyPl0G548qaZgo611gMNdvOLdhGdjJgDgNyeSjmdKKnJ2iqhcyju6cdf3qdg+2gZ/ySy8wpIjqYirvsn/AKaXWhrza/hUe+ZtFHWGPSttg/hazZHeJMazmyqPEnc9dPKsXjfizvGBtXcLc0DBGMRO08Kg4/CtYbK4zWn0MGVKmJg8Dx8a9Vvdn4UiGw9pxOk20aTzkqST196qO08HYdPlCwoTcAMVgzpl72nHlvWL+O8+qs7l+PFe0ML8u4yTIB0PNSJU+YIqNW2+LfhZ0Au28zoq5SDBdQJOY5dCIPSsRXWXYzYKKKKqCiiigKKKKAooooClpK6USYoHrC6z1gfqfSrjB3CCQ0bmI4rpw6TVfbEEAcB/x+tSSNVbWVnbjIqxKe7ZLBQB9JMk9Rw8NSae7N7JIEltWAJEaDiBvvrSX7i/KfNwGnjw96sezb+ZFJ0MAEHnH2fOqF7LdbDGR3zMtGuX8K8uvPyFTMF2il26cuGslVGrNbQszHRVkgzPPkD0prtHCZlkecbjrXPw1iktBy8KbcyOZ4t1J08oFT6fGpTsxbaFrjKgIMrbi0gHHMEC5uevLWsF292hbe4EsW1VF7qgAAnqeQ4+9Mdu/EF3EtlBOWYVV6nTqSdNPCpvYvwu9y7cts4Btx81h3wsiShMgA6EMxYAQRJ1paSD4Y7HzM1+8gbDorFy2k9wxkHEzAHVhpXpnwF2KuHw+cple73nEliFBJVC28ccvPckg1XYbDqGtYZ8gtoGvOiBoFtCVtWySxzMWfOTOogiNDWmx2LCIW5Dhyj+01IVOfG6naOnE0zfE95xP8u8dOWbr6VT9k4rMivJlgGmPxTl08JP/FRviO7ce0VQiTuNiVA1APAnTXrwrbLvtL4htWzA77fhSNP63mBr4xGsVj8f8WX5JU20HIJnI652IBPisVS3XhgHD5Qe8oMHTcazBH3HC3xCIgBtouVgCHPeJB6n8jPjtWbWpES18T3yVJus3Q27QU/7UB9CKpfiTCLIv2lCo5hlGyONwP5W3HnttWmCZl0JYkaAEKBpGw3g8fKONQreGzFrL/S6xmgSCdVMxJg8OYiudmXW5dmMNRTt+yUZlYQVJB8QYpqtsiiiigBRRRQFFFFAVIwq6meAn3FR6k4QHNPCNfD/AJHtQS0WP1ru08mANOdMYi5rHLWuQCNZ1jbx4chVRJxxlD4irDB4qQrRvr57H3qqvFnCrpLE/wDtA09Z9Km4dIRRyGvmdfcmqNRh7gZZGx3FZz4iw+XvL59Rw8wam9l4shgnBjx5x+Z/Sne2GTIyswHFec8gNzNSkV3w3hwiXMSWVGtlVVm1yM4b/MCj6mEALyLZv4a2nZfZLthQjq1qwy53uNlttkL58zNlOZ4gxzIHWspY+HHa0IfvOyllMhcuvH8QzH3Hi98Q4a7K2xed8qZ+/cVAsEcwATqI70ifWYLnsfGtdu4i6yx8y/Ysqp4Jn1Qce6uWfAVb/HuMyYYqDq5CztprPsKpOyrKo+Bsxlcu9y4uaTmVXMsdiYA16Un/AFHxMsicpPH8I99TSF9tH2ddm0kfgTpp8sE/nT7gnXpHptHrvVP8NYnOqjnat+oQKR7VeXkAgDhx+/vT10yzPb3ZgeXUQ69Pq10HjBX1A46UeCxZZGsndZZOen1r+vOYrV9o3W1AH3/b3P54rtdCj/MWQQZ5bb+ca+R5mpWon9nXVlsxgb8JjKwaJ20gceGm1TbTo5kNLDUHKwzSdQJA4mfaqzEdqWAiwqAkBu6GZ8xGoMn6dToGGw0qq/7bg6IT/U0HTqomsWa3q3+Pux8jLfUEBwAwjYxofYr5DnWKrb4Xte7fU2rqJ8lxDaHMvJlM8DB24edZHHYVrbsh3UkHy2PmNfOpzfhZ9RqKKK2yKKKKAooooCpyrCAc9T57e1Q0WSBViwnYaDn0oGgJ1PX89KfPHWPPp/z6U0EIVdPw04riQOMyR4kUCE95AP4ZbrxMVPW4BvJHhqQRqIqBZbM7NyEe/wCxqSlwEZh96/oZHpViUoDscqgqNsx1PPugbeNXNnArZyshlm/iOraa5hptw9Krfn5RJMACSenTqf06112JbZgzlmLHRcxLDKNSN+fuKo1ll1CjrqD+Y8j+YrFfFWLD32y6hIWd9Qiqfdau1QuCoJBbQOSVIIOkRw9tTzmqfEYBNSEZSJBAYyCJzSCMsDTiJqUiV2X2qVxFp3MlV3PNrYU/mRXfxbjPmXgQdAB71QnukA76g8dfEV1cuz1qT0t9tb8I4mGXjCkeWcn9fatTiu0lzBRyncDl7bVgfhXEZb6Tsd/MVpO0UTOxUwwYKeUyB+smtRmrU2wRI1B156T09azuOtcIj0McfzB06Gr/ALOclCp+odPz5kSPXrVJ2ihmI47n9PQfcUIxjYMgkNprw/vQoj6V8/3NXpwUiTueh+xw9ahPhmRyJ04fp+cVlpI7Hvlw34kIkc1M058W4PMiXxvGVusQFb8vXpULCuUcPEBvqG0gnlw2PmK099Q+GcEAgDMI4gb+cE/Yrj1/HqV1nnnHnFFPYmyUdlPA+o3B8xB86Zrs5CiiigKKKfw1nMY2A1J5CgfwNvdiOg68z5VJe5vOg9NKQt002A5CmQcxJP0r7ngBVQEsw3yrzO/370KwWIJjhJj2rl7hkACWOw5VNt4ZQO8Ax4k6+nSoqJaugTABnUwfvrXNm7DmNjNPX7ALEiNtBTY1O2vGfvaqO7hLsEG27H78vblV5hWCgAaAbVT4ZAu0yd/vlVhaeiLhbf8AGDoTqORPGeU78p5U3j0gi6OMI/LMPoYgESDEHqBzrnBYgDRoykazt59Kl28plW7yEQTM5lb6WB59ea1RmO1cMBDhukMMhImJVSozAGdixgiarprU3UVVdbjhQuhIVu9mEIxKzKlTtlO55Vm8VZyMQGVhupVw4ynbvADXgZAOmwrE8eGjS3GXVSQelWf+JD/PJnvhbg1jvKwkR4Mw/wBNVTUWLxVgeR25g7jzEjzqo9M7FuqLNsg6qi5jzkQST4zNMdpKC5Mc/wC0kDXhFV/wbfLJdG65gq+EEkdP4fWpuJY5YO6+P30592tIjpb19vIj+361WdtTnB4EEDxEsPbNU2zdhjPSNf1n7/NvH2+4XPBh6ZwGOv8ALP3FQVeITMgPIQNeRDCfVvSrr4evSgRtV1EEzpH/AOSD5+FVmG1DoQNBP+wwR/sdvSuMBiMrOCYK95R1VobxBBA/01jvn9pjfPWVXduYQozA7o2U9UbvI3oSPQVTVs/iK0rLbuqe665H4xMshjoQ3oBWPuIQSDuDB8RvTi7DqZXFFFd2rZYgCtMuVUnQVPsLC5eepp61ZCiI++tPN9JqohXnOw3OgrlyFA5Lt1biaM3enkCfOP3ppRmZQdtP71FTsKmUSfqOpPjwqQi86aLa+FPJVR1kk1X4hwGBHn4afrP3FSLuJ/hHh6/ZrnEDuHh/zQJbaZjjyqRZf8yPQxVbbYBivCptr8qK6x98gAA/vyq87JRvkgEy6yY0+kmck+XqI2qlYjMsieR5bCff2q3w9/KQ3kR04/fQURCbBvcc/PLLMZVB+kKfp5SBHrVZ2pg/lXMvCAVOveU7N48DwkGtfjbOdcwiRBHXl5cPPpUXFYL/ABNmB/4iSVnczup5SfQis255WefDITTTiupO0a0ZOcVRovhHtAKCh/EW9QB+laTFOA2fTI3h78xsfOvOrVzK0g+dbDsvGfNtBT9Snbn0qxKeSyxJMGPAyZj0P94qxfB5kZNJcEeqwY66+/HWei4CaCSNNt9NIMQdNPL17w2JjVpExHdJ8CBHU9NTvVGO7yHXRgIYcjGVx7t6VUPeOeTzg/8AxPtV98YPlxDKo0YAnTYsIIHiIPi1M4fsnQM47x2A1MxrtoOO9ZVa38MRhXSDoMyk7EKwYjxgOPMVk+0EHdYfxCD/AFLAPtlPnXpz4V/8ICyZXAIlhlJGQjNzgqePLkdfO7dkujIAS4IZRz4MNehn/TWcy1rdioq0sWgq/wAx1qLgrQJLHZfz4VId+PpW2T8gCTTL3j4VwGPGkc0QzcaNaXDEZp6GPHh7U25rlX1B5VFWYEffHjTd2+fpXc0t19J4HWmLaEyeJFVDuQaa7bePEmnGeRUZbkHWYri4+ulRTt1Q0aeH3yqTabQTvVfm47VJw2YiSd9vLjQSLgmf5fcEVKwN4mQeEQdtDt56R6VCIiDMzv1nj+Vd2nyt+8b7+2vrVRpuzr26Hht1XiPf36UmY2rgI2bblMceUifMdaqsJiCbkjZdPEmCT4RHqavsTYD2/DXTfn6ggEeFPYzvxXgArC+n0XDrHB+I84J8Q1Z4WydhWxsqbiNh2IH4hGx3Drx1IB16+ef7UwDWHAmVYZlaImNwf5gZB8jxrMlnite0IYZuXvUvC3TbIM6cYpgXOtSbOCZ9wfAb/tQxY/8Ab2YwqOTzB18YFWGAx7Mdbht7fU5cnXkAdelVlns927qKFH9Sj1kzVkvwveMEMjHkH/uBV1MW13sLDuTee/cdgcxIRJ8e9Igf0nnNNdho6XHYYrJaQg3C6IbhXdcmh0YSJ0ggjrTWHwWJs/UrCOI19xoKhYnBpdbQi20bNoh15/w/l4U3PJ/i0x3xQtxnQB8sHK2YmdNQRt4GOFRuz8Ct1VuJCXF+ocDIiRHjTvZ3w/c+W6/IuF2A7yqziAZBBA26jpU7sbs57Gjgq3XunlXn7692O3PPx5xhX7rDz8q7bnUJWgzU3PKzXpcS01cakZ6bmiCiKKBQPK8LB8ulOSwGu33rUZnpEucDt+VB3caabFdSOB/OuWaoru04B1GnHwqfdXZeB49Bw8ar8OksOmpqztjhuD9yOtVCpanXgKeW2mhOv30rktwG1M37nLfYUC43tAjuppGpI58vDnV52H2qHldiNdaz93DIFlhqZ4mdFJ8OFL2Q5XMRupBHvNBf9qIUdbqDbcc0O48jrVdiMTcxBKKmZAZTQgyNGKtxkaZSeXKr9LyXbW4nhJA15Hx286jPiXRELRlYkTEZNZUEeU8NjUs0nhn7VtUYB0ZCdO8D/wDb9DV0F+WFOZXtuCSoIzgAwWXnB/cVLxuK+YrLdyMQIJZGt5jBjKSCrNtAzgyDEzAouyMSFzpdB7mZlM95WXUieRCkHyrnddJh/H4Uoc6mUbVWHL9D0py32uyJCsQYjTSlw2PU23gQoaQu4AMTHTeqnE45CdEA6j9Bt51ebfR1IdbtF1ObO09GNcXO2rryGMjw/MjemLQtuwzsyLxaM58l/iPSR4ik+WpaEYxsARDHTpInfataysMH2xiEHdvXFngHYCPCadtdq3JkuSTueJ86bw2AUaOR61OTCW+DKPesdXn+mpKx1dq8acK4orowcmlpqug1B0aAONJRmmgRjQppKUCgDSUpFd21k+9BMwqwOp1qQmkmmA0127gCqgt3Jny/WuUaW8NfM7frUey+p5N7Gi0/1c96gcxV0nfiI8p/akwTmSBoSAJ5c2++dRrjyacwwJaJgEa+FFXvZWICtl/gcwv9QA18DtPMdan5u+1tz3LugP4LijSPGAfGetZ5nkSZgd1R15+PLlFW6YtXTM8d0jP0ZTKsPvjFVE/su6AxR5DLCtlYqYBBVhG+oA2MjLwqs7d7NNi7nBZrdxWIZo+ojvAlQAdTOgG/SmEx5f8AzCBmTRh+JDoJ5xOU+K1KvJbdCoyKTqDD21H4WYiUzbgkqJmJFZs86sqksXSEdeLQPeo4gbCT6+1KeXKeIPuN67RgKuAFonc12gC6/nTbXDXJNA+2I8TXBvtw0pqafxGGKIrzOb2PL8/SoINFFFUFFFFAUooooFbekFFFB09O2aKKB4U3iPv0ooqoYXenk/vRRUU029P4bjRRQPD6x0FNYo94jhI9p/uaKKqJfZaDuGPqZ1PVcm3hUrsvhqdCdiRw6UUUFZiWkydToPQCo9FFRRSUUUE3DINDFPjW2RwzTFFFY6aj/9k=" alt="" />
            </div>
            <div>
            <h5 className='we'>Call of Duty@:Warzone Mobile</h5>
          <p>
            <s className='strike'>BORING</s><b> Action, Tactical shooter</b> 
          </p>
          <button className="Btn3">Install <i className="fa-solid fa-download"></i></button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Dark;