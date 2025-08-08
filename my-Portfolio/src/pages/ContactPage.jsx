import '../css/ContactPage.css';
import Header from '../components/Header';
import contactTitle from '../assets/contact-title.svg';

function ContactPage() {
  return (
    <div className="App">

      {/* 頁面標題圖片區塊 */}
      <section className="px-8 py-20" style={{ maxWidth: '1280px', margin: '0 auto' }}>
  <div
    className="fade-up"
    style={{
      display: 'flex',
      justifyContent: 'flex-start', // 從右對齊改為左對齊
      paddingLeft: '20px',          // 向左推進一些空間
    }}
  >
    <img
      src={contactTitle}
      alt="聯絡資訊標題圖"
      style={{
        width: '20vw',
        maxWidth: '280px',
        minWidth: '150px',
        marginTop: '110px',
      }}
    />
  </div>
</section>


      {/* 黑色線條 */}
      <div
        className="line-grow fade-up"
        style={{
          width: '90vw',            // 寬度跟視窗寬度比例
          maxWidth: '1280px',       // 最大寬度限制
          height: '3px',
          backgroundColor: 'black',
          marginTop: '100px',       // 保持原本高度
          marginLeft: 'auto',       // 左右置中
          marginRight: 'auto',
        }}
      ></div>

      {/* 聯絡方式區塊 */}
      <section
        style={{
          maxWidth: '1250px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '30px',   // 保持原本高度
          padding: '20px',
          fontSize: '18px',
        }}
        className="fade-up-delay"
      >
        <h2 style={{ marginBottom: '10px', fontSize: '20px', fontWeight: '500' }}>
          謝謝您造訪本網站
        </h2>
        <h2 style={{ marginBottom: '10px', fontSize: '18px', fontWeight: '500' }}>
          有任何問題或邀約歡迎使用下面的表格詢問我
        </h2>
        <p style={{ marginBottom: '10px', fontWeight: '300' }}>
          在極少數情況下 可能會出現聯絡表單提交錯誤
        </p>
        <p style={{ marginBottom: '10px', fontWeight: '300' }}>
          如果您在 1-2 個工作天內未收到回覆或無法透過表單傳送
        </p>
        <p style={{ marginBottom: '10px', fontWeight: '300' }}>
          請直接透過我的信箱「anna0826777@gmail.com」與我聯繫 
        </p>
      </section>
    </div>
  );
}

export default ContactPage;
