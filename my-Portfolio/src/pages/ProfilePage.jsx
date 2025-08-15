import '../css/ProfilePage.css';
import '../index.css';
import aboutTitle from '../assets/profile-title.svg';
import myPhoto from '../assets/my.svg';
import cakeIcon from '../assets/cake.svg';
import phoneIcon from '../assets/phone.svg';
import mailIcon from '../assets/mail.svg';
import downloadIcon from '../assets/download.svg';
import schoolLogo from '../assets/FHTA.svg';
import fjuLogo from '../assets/fju.svg';
import certificateIcon from '../assets/certificate.svg';
import starIcon from '../assets/star.svg';
import skillBackground from '../assets/skillbackground.svg';
import skill from '../assets/skill.svg';
import aiLogo from '../assets/ai-logo.svg';
import psLogo from '../assets/ps-logo.svg';
import prLogo from '../assets/pr-logo.svg';
import aeLogo from '../assets/ae-logo.svg';
import figmaLogo from '../assets/figma-logo.svg';
import sketchLogo from '../assets/sketch-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import htmlLogo from '../assets/html-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import jsLogo from '../assets/js-logo.svg';
import idLogo from '../assets/id-logo.svg';

function ProfilePage() {
  return (
    <div className="App">

      <div style={{width: '100%' }}>
        {/* 作品標題區塊 */}
        <section className="px-0 py-0"
          style={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <img
            src={aboutTitle}
            alt="個人簡介標題圖"
            style={{ width: 230, marginTop: 110, marginLeft: 20, maxWidth: '100%' }}
          />
        </section>

{/* 黑色線條 */}
      <div
        className="line-grow"
        style={{
          width: '100%',
          height: '3px',
          backgroundColor: 'black',

        }}
      ></div>


        {/* 大頭照 + 聯絡資訊 + 教育背景 */}
        <section
          className="fade-up-delay"
          style={{
            marginTop: 40,
            marginLeft: 75,
            display: 'flex',
            alignItems: 'flex-start',
            maxWidth: 1280,
          }}
        >
          {/* 大頭照 */}
          <img src={myPhoto} alt="我的大頭照" style={{ width: 250, height: 'auto' }} />

          {/* 聯絡資訊 */}
          <div style={{ marginLeft: 60, maxWidth: 400 }}>
            <div style={{ fontSize: 30, fontWeight: 'bold' }}>魏可昕</div>
            <div style={{ fontSize: 12, fontWeight: 600, marginTop: 2 }}>WEI, KO-HSIN</div>

            {/* 生日 */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
              <img src={cakeIcon} alt="生日" style={{ width: 16, marginRight: 6 }} />
              <span style={{ fontSize: 14, fontWeight: 500 }}>2002.08.26</span>
            </div>

            {/* 電話 */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
              <img src={phoneIcon} alt="電話" style={{ width: 16, marginRight: 6 }} />
              <span style={{ fontSize: 14, fontWeight: 500 }}>+886 918-082-691</span>
            </div>

            {/* 信箱 */}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center' }}>
              <img src={mailIcon} alt="信箱" style={{ width: 16, marginRight: 6 }} />
              <span style={{ fontSize: 14, fontWeight: 500 }}>anna0826777@gmail.com</span>
            </div>

            {/* 下載按鈕 */}
            <div style={{ marginTop: 30, display: 'flex', gap: 10 }}>
              <button
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  width: 90,
                  height: 30,
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0 12px',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}
              >
                CV
                <img src={downloadIcon} alt="下載" style={{ width: 16, marginLeft: 6 }} />
              </button>

              <button
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  width: 90,
                  height: 30,
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0 12px',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}
              >
                履歷
                <img src={downloadIcon} alt="下載" style={{ width: 16, marginLeft: 6 }} />
              </button>
            </div>




          </div>

          {/* 教育背景，統一控制間距 */}
          <section
            style={{
              marginTop: 50,
              marginLeft: 50,
              display: 'flex',
              gap: 40, // 用 gap 控制高中/大學間距
              alignItems: 'center',
              flexWrap: 'nowrap', // 不讓它換行
              minWidth: 'fit-content',
            }}
          >
            {/* 高中 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <img src={schoolLogo} alt="高中校徽" style={{ width: 140, height: 'auto' }} />
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  <span>復興商工</span>
                  <span style={{ color: '#888888', fontWeight: 400 }}>|</span>
                  <span style={{ fontWeight: 400 }}>美工科</span>
                </div>
                <div style={{ fontSize: 18, fontWeight: 400, marginTop: 10 }}>媒體傳達設計組</div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: '#888888',
                    marginTop: 10,
                  }}
                >
                  2017.09 - 2020.06
                </div>
              </div>
            </div>

            {/* 大學 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <img src={fjuLogo} alt="輔大校徽" style={{ width: 130, height: 'auto' }} />
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 18,
                    fontWeight: 600,
                  }}
                >
                  <span>輔仁大學</span>
                  <span style={{ color: '#888888', fontWeight: 400 }}>|</span>
                  <span style={{ fontWeight: 400 }}>廣告組</span>
                </div>
                <div style={{ fontSize: 18, fontWeight: 400, marginTop: 10 }}>大眾傳播學系</div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: '#888888',
                    marginTop: 10,
                  }}
                >
                  2020.09 - 2024.06
                </div>
              </div>
            </div>
          </section>
        </section>




        {/* 證書標題 */}
<section
  className="fade-up"
  style={{ display: 'flex', alignItems: 'center', marginTop: 50, marginLeft: 100 }}
>
  <img src={certificateIcon} alt="證書圖標" style={{ width: 24, marginRight: 10 }} />
  <span style={{ fontSize: 26, fontWeight: 600 }}>榮譽</span>
  <span style={{ fontSize: 14, fontWeight: 400, marginLeft: 8 }}>CERTIFICATE</span>
</section>

{/* 榮譽包裹容器，置中且限制最大寬度 */}
<div style={{ maxWidth: 1280, margin: '40px auto 0 auto', padding: '0 20px' }}>
  {/* 星星榮譽 第一排 */}
  <section
    className="fade-up"
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 80,
      marginTop: 50,
      flexWrap: 'wrap',
    }}
  >
    {[
      {
        title: '輔仁大學 110 學年度',
        desc: '學期成績第三名',
        date: '2021.10',
      },
      {
        title: '輔仁大學 109 學年度',
        desc: '作文特優',
        date: '2021.02',
      },
      {
        title: '復興商工元旦展',
        desc: '美工、廣告設計科媒體傳達設計類佳作',
        date: '2019.12',
      },
    ].map(({ title, desc, date }, idx) => (
      <div
        key={idx}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 280,
          flex: '1 0 280px',
        }}
      >
        <img className="star-icon" src={starIcon} alt="star icon" style={{ width: 60, marginBottom: 10 }} />
        <div style={{ fontSize: 20, fontWeight: 600, color: '#000', marginBottom: 10 }}>{title}</div>
        <div style={{ fontSize: 18, fontWeight: 400, color: '#000', marginBottom: 10 }}>{desc}</div>
        <div style={{ fontSize: 14, fontWeight: 300, color: '#888', fontStyle: 'italic' }}>{date}</div>
      </div>
    ))}
  </section>

  {/* 星星榮譽 第二排 */}
  <section
    className="fade-up"
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 80,
      marginTop: 60,
      flexWrap: 'wrap',
    }}
  >
    {[
      {
        title: '復興商工 107 學年度',
        desc: '學期成績第三名',
        date: '2019.02',
      },
      {
        title: '復興商工 師生美展 美工科',
        desc: '公仔設計類 入圍',
        date: '2017.06',
      },
      {
        title: '彩繪大圓山寫生比賽',
        desc: '高中組入選',
        date: '2017.06',
      },
    ].map(({ title, desc, date }, idx) => (
      <div
        key={idx}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 280,
          flex: '1 0 280px',
        }}
      >
        <img className="star-icon" src={starIcon} alt="star icon" style={{ width: 60, marginBottom: 10 }} />
        <div style={{ fontSize: 20, fontWeight: 600, color: '#000', marginBottom: 10 }}>{title}</div>
        <div style={{ fontSize: 18, fontWeight: 400, color: '#000', marginBottom: 10 }}>{desc}</div>
        <div style={{ fontSize: 14, fontWeight: 300, color: '#888', fontStyle: 'italic' }}>{date}</div>
      </div>
    ))}
  </section>
</div>


        {/* 技能區塊（包含標題與底圖） */}
        <div
          style={{
            marginTop: 50,
            width: '100vw',
            position: 'relative',
            left: '50%',
            marginLeft: '-50vw',
          }}
        >

          {/* 技能標題 */}
          <section
            style={{
              position: 'absolute',
              top: 60,
              left: 180,
              zIndex: 1,
              display: 'flex',
              alignItems: 'center', // 垂直置中
            }}
          >
            <img
              src={skill}
              alt="技能圖標"
              style={{ width: 24, marginRight: 10 }}
            />
            <span style={{ fontSize: 26, fontWeight: 600, color: '#000', marginRight: 10 }}>
              技能
            </span>
            <span style={{ fontSize: 14, fontWeight: 400, color: '#000' }}>
              SKILLS
            </span>
          </section>


          {/* 技能底圖 */}
          <img
            src={skillBackground}
            alt="技能背景圖"
            style={{
              width: '100vw',
              height: 'auto',
              display: 'block',
            }}
          />
        </div>


        {/* 技能圖標區 */}
        {/* 技能圖標區 */}
<div
  className="icon-scroll-wrapper"
  style={{
    overflow: 'hidden',
    width: '100vw',
    position: 'relative',
    height: 130,
    marginTop: -200,  // 從 -250 改為 -230 或其他合適值，讓垂直靠底圖視覺中心
    display: 'flex',
    alignItems: 'center',
    left: '50%',
    marginLeft: '-50vw',
    justifyContent: 'center',
  }}
>
  <div
    className="icon-scroll"
    style={{
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      paddingLeft: '55px', // 依你底圖視覺中心微調這個值，建議調整 40~70px 之間
      // paddingRight: '40px', // 如有偏右也可調整右邊
    }}
  >
            {[
              aiLogo,
              psLogo,
              idLogo,
              prLogo,
              aeLogo,
              figmaLogo,
              sketchLogo,
              reactLogo,
              htmlLogo,
              cssLogo,
              jsLogo,
              aiLogo,
              psLogo,
              idLogo,
              prLogo,
              aeLogo,
              figmaLogo,
              sketchLogo,
              reactLogo,
              htmlLogo,
              cssLogo,
              jsLogo,
              aiLogo,
              psLogo,
              idLogo,
              prLogo,
              aeLogo,
              figmaLogo,
              sketchLogo,
              reactLogo,
              htmlLogo,
              cssLogo,
              jsLogo,
              aiLogo,
              psLogo,
              idLogo,
              prLogo,
              aeLogo,
              figmaLogo,
              sketchLogo,
              reactLogo,
              htmlLogo,
              cssLogo,
              jsLogo,
              aiLogo,
              psLogo,
              idLogo,
              prLogo,
              aeLogo,
              figmaLogo,
              sketchLogo,
              reactLogo,
              htmlLogo,
              cssLogo,
              jsLogo,
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="技能圖標"
                style={{
                  maxWidth: 100,
                  maxHeight: 100,
                  width: 'auto',
                  height: 'auto',
                }}

              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
