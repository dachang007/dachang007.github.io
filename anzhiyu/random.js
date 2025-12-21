var posts=["2025/04/02/Java核心知识10-线程管理/","2025/04/02/Java核心知识4-AOP原理和切面应用/","2025/04/02/Java核心知识5-反射机制/","2025/04/02/Java核心知识6-集合框架/","2025/04/02/Java核心知识7-线程安全性讨论/","2025/04/02/Java核心知识8-Java如何保证线程安全性/","2025/04/02/Java核心知识9-并发与多线程/","2025/03/22/MQ系列1-消息中间件执行原理/","2025/03/22/MQ系列2-消息中间件的技术选型/","2025/03/20/Redis系列-布隆过滤器/","2025/03/20/布隆过滤器原理/","2025/03/20/生产事故记录一次雪崩的灾难复盘/","2025/03/17/DNS 泄漏、CDN 访问优化与 Fake IP/","2025/03/11/Redis系列1-深刻理解高性能Redis的本质/","2025/03/11/Redis系列11-内存淘汰策略/","2025/03/11/Redis系列14-使用List实现消息队列/","2025/03/11/生产事故记录OOM/","2025/03/11/生产事故记录医疗项目/","2025/02/18/Java8新特性/","2025/02/18/Java回顾-JVM虚拟机/","2025/02/18/Java回顾-基础篇/","2025/02/18/Java回顾-并发篇/","2025/02/18/Java核心知识1-泛型机制/","2025/02/18/Java回顾-框架篇/","2025/02/18/Java核心知识2-注解机制/","2025/02/18/Java核心知识3-异常机制/","2025/02/18/Java设计模式-单例模式/","2025/02/18/java9新特性/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };