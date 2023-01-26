import { useCallback } from "react";
import "./Home9.css";

const Home9 = () => {
  const onPolygonButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center" });
    }
  }, []);

  const onRectangle1Click = useCallback(() => {
    // Please sync "Home – 8" to the project
  }, []);

  const onPath66IconClick = useCallback(() => {
    // Please sync "Home – 8" to the project
  }, []);

  const onLink4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='iSO90012015Text']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButton2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  return (
    <div className="home-9">
      <img
        className="whatsapp-image-2022-11-28-at-1"
        alt=""
        src="../hero-bg@2x.png"
      />
      <div className="cta-rectangle">
        <h3 className="cta-title"> المعمل الاول من نوعه في العراق</h3>
        <div className="cta-buttons">
          <button className="contact-us">
            <b className="b">تواصل معنا</b>
          </button>
          <button className="learn-more">
            <div className="wrapper">
              <b className="b1">اعرف المزيد</b>
            </div>
          </button>
        </div>
      </div>
      <div className="logo">
        <img className="factory-icon" alt="" src="../factory.svg" />
        <b className="k">K</b>
        <b className="arbala">{`arbala `}</b>
        <b className="actory">actory</b>
        <b className="ime">ime</b>
        <b className="l">L</b>
        <b className="f">F</b>
      </div>
      <div className="navigation-buttons">
        <a className="a">الرئيسية</a>
        <a className="a1">الأخبار</a>
        <a className="a2">المنتجات</a>
        <a className="a3">حول</a>
      </div>
      <p className="p">
        <span className="span">{`ومن المعامل الاستراتيجية الذي تساهم منتجاته في كثير من الصناعات واهمها التعدين, تنقية النفط الخام, المواد الزراعية, `}</span>
        <span className="span">السقوف الثانوية, مواد البناء. </span>
      </p>
      <p className="p1">
        <span className="span">{`وباستخدام الطريقة المستمرة ومن خلال الافران الدوارة `}</span>
        <span className="span">{`نضمن الحصول على اعلى نقاوة لمنتجاتنا `}</span>
      </p>
      <button className="home-9-child" onClick={onPolygonButtonClick} />
      <img className="home-9-item" alt="" src="../polygon-5@2x.png" />
      <img className="home-9-inner" alt="" src="../polygon-7@2x.png" />
      <img className="path-49-icon" alt="" src="../path-49@2x.png" />
      <img className="path-50-icon" alt="" src="../path-50@2x.png" />
      <img className="path-52-icon" alt="" src="../path-52@2x.png" />
      <div className="div" data-scroll-to="text3">
        النورة في كربلاء
      </div>
      <div className="div1">
        <p className="qms">
          معمل النورة في كربلاء المقدسة احد معامل الشركة العامة للسمنت
        </p>
        <p className="qms">{`تم تأسيسه عام 1980 وبدأ بالإنتاج الفعلي عام 1983 لإنتاج النورة `}</p>
        <p className="qms">
          والفلر لمختلف الأغراض الصناعية والتي من أهمها الإيفاء بمتطلبات
        </p>
        <p className="qms">{`معامل الطابوق الجيري والثرموستون من مادة النورة الحية إضافة `}</p>
        <p className="qms">{`الى تجهيز مختلف القطاعات الصناعية والزراعية والخدمية بالنورة `}</p>
        <p className="qms">{`الحية والمطفأة و الفلر, ينتج المعمل منتجات مطابقة لمتطلبات `}</p>
        <p className="qms">{`المواصفات العراقية ومتطلبات المواصفات القياسية العالمية.  `}</p>
      </div>
      <img className="path-51-icon" alt="" src="../path-51.svg" />
      <div className="path-76" />
      <img className="path-53-icon" alt="" src="../path-53.svg" />
      <img className="path-55-icon" alt="" src="../path-55.svg" />
      <img className="path-54-icon" alt="" src="../path-54.svg" />
      <img className="path-56-icon" alt="" src="../path-56.svg" />
      <div className="div2" data-scroll-to="text2">
        المنتجات
      </div>
      <img
        className="precastojudran-42-icon"
        alt=""
        src="../precastojudran42@2x.png"
      />
      <img
        className="ppc-mockup-bag-425psdssss-e16-icon"
        alt=""
        src="../ppcmockupbag425psdsssse1604916629650@2x.png"
      />
      <img
        className="ppc-mockup-bag-425psdssss-e16-icon1"
        alt=""
        src="../ppcmockupbag425psdsssse1604916629650@2x.png"
      />
      <img
        className="white-cementw-e1666300891592-icon"
        alt=""
        src="../white-cementwe1666300891592@2x.png"
      />
      <img className="path-60-icon" alt="" src="../path-60.svg" />
      <div className="div3">الفلر</div>
      <div className="div4">
        النورة الحية تنتج من خلال التحلل الحراري لحجر الكلس (لايمستون ) عالي
        النقاوة و الحاوي على كاربونات الكالسيوم يتم الحرق في افران دوارة
        بتكنلوجيا متقدمة لضمان الحصول على المنتجات وفق المواصفات المعتمدة و
        باعلى حدودها تستخدم النورة الحية في صناعة الطابوق الجيري و الثرمستون و
        اعمال صناعية وزراعية مختلفة و تجهز الى المستهلكين بنوعين الاول هو الفل
        والنوع الثاني هو المكيس
      </div>
      <div className="div5">
        يتم انتاج النورة المطفأة في المعمل باضافة الماء الى النورة الحية في خطوط
        الانتاج المخصصة لهذا الغرض حيث تتحول النورة الحية الى المطفاة وتباع الى
        المستهلكين على شكل فل او مكيس تستخدم النورة المطفاة في صناعة الاصباغ
        ومعالجة المياه ومعالجة المخلفات الصناعية واستخدامات متعددة اخرى
      </div>
      <div className="div6">
        يتم انتاج النورة المطفأة في المعمل باضافة الماء الى النورة الحية في خطوط
        الانتاج المخصصة لهذا الغرض حيث تتحول النورة الحية الى المطفاة وتباع الى
        المستهلكين على شكل فل او مكيس تستخدم النورة المطفاة في صناعة الاصباغ
        ومعالجة المياه ومعالجة المخلفات الصناعية واستخدامات متعددة اخرى
      </div>
      <div className="div7">
        يتم انتاج النورة المطفأة في المعمل باضافة الماء الى النورة الحية في خطوط
        الانتاج المخصصة لهذا الغرض حيث تتحول النورة الحية الى المطفاة وتباع الى
        المستهلكين على شكل فل او مكيس تستخدم النورة المطفاة في صناعة الاصباغ
        ومعالجة المياه ومعالجة المخلفات الصناعية واستخدامات متعددة اخرى
      </div>
      <img className="path-58-icon" alt="" src="../path-58.svg" />
      <img className="path-61-icon" alt="" src="../path-61.svg" />
      <img className="path-69-icon" alt="" src="../path-69.svg" />
      <div className="div8">النورة الحية السوفت</div>
      <div className="div9">{` النورة الحية الهارد `}</div>
      <div className="div10">النورة المطفأة</div>
      <div className="container">
        <div className="div11">الخواص الكيميائية للمنتجات</div>
      </div>
      <div className="path-63-parent">
        <img className="path-63-icon" alt="" src="../path-63.svg" />
        <div className="div12" data-scroll-to="text1">
          الأخبار
        </div>
        <div className="div13">زيارة محافظ كربلاء</div>
        <div className="div14">زيارة محافظ كربلاء</div>
        <div className="div15">
          عقب تسنمه إدارة مهام مدير معمل النورة في كربلاء المقدسة. الأستاذ
          المهندس جواد آستقبل الاستاذ المهندس جواد الحسناوي مدير معمل النورة في
          كربلاء المقدسة الأستاذ حسين المنگوشي قائم قام كربلاء المقدسة"
        </div>
        <div className="div16">
          عقب تسنمه إدارة مهام مدير معمل النورة في كربلاء المقدسة. الأستاذ
          المهندس جواد آستقبل الاستاذ المهندس جواد الحسناوي مدير معمل النورة في
          كربلاء المقدسة الأستاذ حسين المنگوشي قائم قام كربلاء المقدسة"
        </div>
        <div className="group-child" />
        <div className="group-item" onClick={onRectangle1Click} />
        <div className="group-inner" />
        <div className="rectangle-div" />
        <div className="group-child1" />
        <div className="group-child2" />
        <div className="rectangle-div" />
        <div className="group-child1" />
        <div className="group-child5" />
        <img
          className="path-66-icon"
          alt=""
          src="../path-66.svg"
          onClick={onPath66IconClick}
        />
        <img className="path-67-icon" alt="" src="../path-67.svg" />
        <div className="div17">1</div>
        <div className="div18">2</div>
        <div className="div19">3</div>
        <div className="div20">4</div>
        <div className="div21">5</div>
        <div className="frame">
          <div className="div22">متابعة القراءة</div>
        </div>
        <div className="group-div">
          <div className="div22">متابعة القراءة</div>
        </div>
        <img className="path-65-icon" alt="" src="../path-65@2x.png" />
        <img className="path-64-icon" alt="" src="../path-64@2x.png" />
      </div>
      <div className="path-68-parent">
        <img className="path-68-icon" alt="" src="../path-51.svg" />
        <div className="div24">شهادات الجودة</div>
        <img className="rectangle-icon" alt="" src="../rectangle-115@2x.png" />
        <img className="group-child6" alt="" src="../rectangle-116@2x.png" />
        <div className="iso-90012015" data-scroll-to="iSO90012015Text">
          <p className="qms">ISO 9001:2015</p>
        </div>
        <div className="div25">شهادة الجودة العراقية</div>
        <div className="iso-9001-2015-container">
          <p className="qms"> ISO 9001: 2015 تعمل</p>
          <p className="qms">{`(QMS) على تحسين معيار إدارة الجودة `}</p>
          <p className="qms">
            {" "}
            الأكثر استخدامًا في العالم ، مما يعكس الاتجاهات الحالية في الاقتصاد
            والابتكار والتكنولوجيا والأعمال ومتطلبات العملاء. باستخدام ISO 9001:
            2015 ، يمكن للمؤسسات منع مشاكل الجودة ومعالجتها بسرعة وتقديم تجارب
            أفضل للعملاء وتحسين الربحية والاستدامة.
          </p>
        </div>
        <div className="sakldjsakjndjknsa-n-ksajn">
          sakldjsakjndjknsa n ksajn djksan djkn asjk ndsa kjnds akjn
          sjaksakldjsakjndjknsa n ksajn djksan djkn asjk ndsa kjnds akjn
          sjaksakldjsakjndjknsa n ksajn djksan djkn asjk ndsa kjnds akjn sjak
        </div>
      </div>
      <div className="path-70-parent">
        <img className="path-70-icon" alt="" src="../path-63.svg" />
        <img className="path-73-icon" alt="" src="../path-73.svg" />
        <div className="div26" data-scroll-to="text">
          تواصل معنا
        </div>
        <b className="b2">خريطة الموقع</b>
        <img className="image-1-icon" alt="" src="../image-1@2x.png" />
        <img className="path-74-icon" alt="" src="../path-74.svg" />
        <img className="path-72-icon" alt="" src="../path-72.svg" />
        <div className="parent">
          <b className="b3">تاريخ النورة</b>
          <img className="line-icon" alt="" src="../line-16.svg" />
        </div>
        <div className="group">
          <b className="b4">الرئيسية</b>
          <img className="group-child7" alt="" src="../line-12.svg" />
        </div>
        <div className="parent1">
          <b className="b5">إستخدامات النورة</b>
          <img className="group-child8" alt="" src="../line-17.svg" />
        </div>
        <b className="b6">+9647713009500</b>
        <b className="alnoorainfogmailcom">alnoorainfo@gmail.com</b>
        <div className="line-parent">
          <div className="line-div" />
          <b className="b5">الخواص الكيميائية للمنتجات</b>
        </div>
        <div className="div27">
          كربلاء المقدسة طريق الحج البري , مقابل مديرية المرور
        </div>
        <img className="path-71-icon" alt="" src="../path-71.svg" />
        <div className="parent2">
          <b className="b8">الطاقة الانتاجية</b>
          <img className="group-child9" alt="" src="../line-18.svg" />
        </div>
        <div className="parent3">
          <b className="b5">المنتجات</b>
          <img className="group-child10" alt="" src="../line-14.svg" />
        </div>
        <div className="parent4">
          <b className="b10">{`حول معمل النورة `}</b>
          <div className="group-child11" />
        </div>
        <img className="viber-1-icon" alt="" src="../viber-1@2x.png" />
        <img className="facebook-2-icon" alt="" src="../facebook-2@2x.png" />
        <img className="viber-1-icon1" alt="" src="../viber-11@2x.png" />
        <img className="whatsapp-3-icon" alt="" src="../whatsapp-3@2x.png" />
        <img className="gmail-2-icon" alt="" src="../gmail-2@2x.png" />
        <div className="parent5">
          <b className="b11">الاخبار</b>
          <div className="group-child12" />
        </div>
        <div className="footer-logo">
          <b className="b12">
            جميع الحقوق محفوظة لمعمل النورة في كربلاء المقدسة
          </b>
          <b className="b13">{`2023 `}</b>
          <b className="b14">©</b>
          <div className="logo1">
            <img className="factory-icon" alt="" src="../factory1.svg" />
            <b className="k">K</b>
            <b className="arbala">{`arbala `}</b>
            <b className="actory">actory</b>
            <b className="ime">ime</b>
            <b className="l">L</b>
            <b className="f">F</b>
          </div>
        </div>
      </div>
      <nav className="group-nav">
        <a className="a4" onClick={onLink4Click}>
          المنتجات
        </a>
        <button className="button" onClick={onButtonClick}>
          الأخبار
        </button>
        <button className="button1" onClick={onButton1Click}>
          شهادات الجودة
        </button>
        <button className="button2" onClick={onButton2Click}>
          تواصل معنا
        </button>
      </nav>
      <div className="wrapper1">
        <div className="div11">الحصول على الاتجاهات</div>
      </div>
    </div>
  );
};

export default Home9;
