class Tools {
  positio(nowEle){
      let l = 0;
      let t = 0;
      let cl = nowEle.clientLeft;
      let cy = nowEle.licentTop;

      while(nowEle){
           l +=(nowEle.offsetLeft+nowEle.clientLeft);
           t +=(nowEle.offsetTop + nowEle.offsetTop);
           nowEle = nowEle.offsetParent;
      }
        l = l - cl;
        t = t - ct;

        return {
            l,
            t
        }
    }
}