export default () => {
  return {
    type: 'carousel',
    contents: [
      {
        type: 'bubble',
        size: 'micro',
        // header: {
        //   type: 'box',
        //   layout: 'vertical',
        //   contents: [
        //     {
        //       type: 'box',
        //       layout: 'horizontal',
        //       contents: [
        //         {
        //           type: 'text',
        //           text: 'NEW',
        //           size: 'xs',
        //           color: '#ffffff',
        //           align: 'center',
        //           gravity: 'center'
        //         }
        //       ],
        //       backgroundColor: '#EC3D44',
        //       paddingAll: '2px',
        //       paddingStart: '4px',
        //       paddingEnd: '4px',
        //       flex: 0,
        //       position: 'absolute',
        //       offsetStart: '18px',
        //       offsetTop: '18px',
        //       cornerRadius: '100px',
        //       width: '48px',
        //       height: '25px'
        //     }
        //   ],
        //   paddingAll: '0px'
        // },
        hero: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'image',
              url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg',
              size: 'full',
              aspectMode: 'cover',
              aspectRatio: '320:213',
              gravity: 'center',
              flex: 1,
              animated: false,
              position: 'relative'
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'NEW',
                  size: 'xs',
                  color: '#ffffff',
                  align: 'center',
                  gravity: 'center'
                }
              ],
              backgroundColor: '#3CB371',
              paddingAll: '2px',
              paddingStart: '4px',
              paddingEnd: '4px',
              flex: 0,
              offsetStart: '9px',
              offsetTop: '8px',
              cornerRadius: '10px', // 圓角
              // width: '48px',
              height: '25px',
              position: 'absolute',
              maxWidth: '80px'
            }
          ],
          flex: 0,
          position: 'relative'
          // type: 'image',
          // url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
          // size: 'full',
          // aspectMode: 'cover',
          // aspectRatio: '320:213'
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '民享市場北側-女廁',
              weight: 'bold',
              size: 'sm',
              wrap: true
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: '優等級',
                  size: 'xs',
                  color: '#8c8c8c',
                  margin: 'xs',
                  flex: 0
                }
              ]
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  spacing: 'sm',
                  contents: [
                    {
                      type: 'text',
                      text: '新北市中和區民享街37號',
                      wrap: true,
                      color: '#8c8c8c',
                      size: 'xs',
                      flex: 5
                    }
                  ]
                }
              ]
            }
          ],
          spacing: 'sm',
          paddingAll: '13px'
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'button',
              style: 'primary',
              action: {
                type: 'uri',
                label: '解放去',
                uri: 'https://linecorp.com'
              }
            }
          ]
        }
      }
    ]
  }
}
