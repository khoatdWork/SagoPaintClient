export const mockProducts = [
  {
    id: 'SGP-ANCL-BBM-001',
    name: 'Sơn Sagopaint Nội Thất Lau Chùi Hiệu Quả Anaclean - Bề Mặt Bóng Mờ',
    category: 'interior',
    image: '/images/noi_that_ana_clean.png',
    description:
      'Cộng nghệ NANO SILVER cung cấp đặc tính kháng khuẩn tuyệt vời chống lại vi khuẩn và các mầm bệnh',
    technicalSpecs: [
      'Lau chùi hiệu quả gấp 2 lần',
      'Công nghệ chống bám bẩn & tính năng kháng khuẩn NANO SILVER',
      'Bề mặt sang trọng, màu sắc bền đẹp',
      'Thân thiện với môi trường nhẹ mùi',
    ],
    howToUse: ['Làm sạch bề mặt', 'Trét bột bả', 'Sơn lót', 'Sơn phủ 2 lớp'],
    notes:
      '*Lưu ý: Khuấy sơn thật kỹ trước khi sử dụng. Sau khi mở nắp phải sử dụng hết. Không thi công khi nhiệt độ không khí < 15ºC hay độ ẩm tương đối >80%',
    mainInfo: [
      {
        key: 'Thời gian khô',
        value: '30 - 60 phút (tùy điều kiện thời tiết)',
      },
      {
        key: 'Sơn lớp kế tiếp',
        value: '120 phút',
      },
      {
        key: 'Độ phủ lý thuyết',
        value: '8 - 10 m²/lít/1lớp',
      },
      {
        key: 'Đóng gói',
        value: '5L, 17L',
      },
      {
        key: 'Thành phần',
        value:
          'Nhựa gốc Acrylic & bột khoáng (48 – 72%). Chất phụ gia (5 – 10%). Nước( 10 -20%)',
      },
    ],
    features: [
      'Màn sơn mịn đẹp',
      'Độ phủ hoàn hảo',
      'Chống nấm mốc',
      'Thân thiện với môi trường nhẹ mùi',
    ],
    howToApplyContent: {
      productInfoContent: `
      Sơn nội thất Sagopaint Màn sơn mịn đẹp V - 2000 là sơn nước trong nhà cam kết mang lại giá trị kinh tế cao nhất. Đây là sản phẩm có chất lượng ổn định và độ tin cậy cao, có thể đáp ứng những nhu cầu trang trí cho ngôi nhà bạn.

      Sản phẩm được thiết kế với tính năng che phủ khiếm khuyết bề mặt tuyệt hảo và màng sơn láng mịn.`,
      preparationSteps: [
        {
          title: 'Bước 1 : Xử lý bề mặt',
          content: {
            new: `
            Để bề mặt tường khô từ 21 - 28 ngày trong điều kiện bình thường. Loại bỏ hết bụi bẩn, dầu mở khỏi bề mặt cần sơn.

            Để có bề mặt nhẵn mịn, sử dụng 2 lớp bột trét nội thất HOASEN ANA.`,
            old: `Làm sạch bề mặt, loại bỏ bụi bẩn, lớp sơn cũ. Xử lý các bề mặt bị rong rêu, nấm mốc bằng hoá chất thích hợp. Rửa sạch bề mặt (nếu cần) và để khô ráo hoàn toàn, độ ẩm bề mặt phải <16% (đo bằng Protimeter).`,
          },
        },
        {
          title: 'Bước 2 : Sơn lót:',
          content:
            'Sử dụng 1 lớp Sơn lót nội & ngoại thất Sagopaint Sealer Primer',
        },
        {
          title: 'Bước 3 : Sơn phủ:',
          content:
            'Sử dụng 2 lớp Sơn Sagopaint nột thất MÀNG SƠN MỊN ĐẸP V - 2000',
        },
      ],
      tools: 'Cọ, rulô, súng phun',
      thinning: 'Nước sạch',
      thinningRatio: '5-10 % theo thể tích (tùy điều kiện thi công)',
      suggestedSystem: [
        'Bột trét: 2 lớp bột trét nội thất HOASEN ANA',
        'Sơn lót: 1lớp sơn Sagopaint lót chống kiềm nội & ngoại thất AnaSealer',
        'Sơn phủ: 2 lớp Sơn Sagopaint nội thất Lau Chùi Hiệu Quả Anaclean - bề mặt bóng mờ',
      ],
    },
  },
  {
    id: 'SGP-MSMD-V2000-001',
    name: 'Sơn Nội Thất Sagopaint Màng Sơn Mịn Đẹp V-2000',
    category: 'interior',
    image: '/images/son_sagopaint_smooth_and_beauty_v_2000.png',
    description:
      `Dòng sơn nước trong nhà cam kết mang lại giá trị kinh tế cao nhất`,
    technicalSpecs: [
      'Màn sơn mịn đẹp',
      'Độ phủ hoàn hảo',
      'Chống nấm mốc',
      'Thân thiện với môi trường nhẹ mùi',
    ],
    notes:
      '*Lưu ý: Khuấy sơn thật kỹ trước khi sử dụng. Sau khi mở nắp phải sử dụng hết. Không thi công khi nhiệt độ không khí < 15ºC hay độ ẩm tương đối >80%',
    // Add other relevant fields
    mainInfo: [
      {
        key: 'Thời gian khô',
        value: '30 - 60 phút (tùy điều kiện thời tiết)',
      },
      {
        key: 'Sơn lớp kế tiếp',
        value: '120 phút',
      },
      {
        key: 'Độ phủ lý thuyết',
        value: '8 – 10 m2  / lít/ 1 lớp',
      },
      {
        key: 'Đóng gói',
        value: '5L, 17L',
      },
      {
        key: 'Thành phần',
        value:
          'Nhựa gốc Acrylic & bột khoáng ( 48 – 72% ). Chất phụ gia ( 5 – 10%). Nước(  10 -20% )',
      },
    ],
    features: [
      'Màn sơn mịn đẹp',
      'Độ phủ hoàn hảo',
      'Chống nấm mốc',
      'Thân thiện với môi trường nhẹ mùi',
    ],
    howToApplyContent: {
      productInfoContent:
        `Sơn nội thất Sagopaint Màn sơn mịn đẹp V - 2000 là sơn nước trong nhà cam kết mang lại giá trị kinh tế cao nhất. Đây là sản phẩm có chất lượng ổn định và độ tin cậy cao, có thể đáp ứng những nhu cầu trang trí cho ngôi nhà bạn.

         Sản phẩm được thiết kế với tính năng che phủ khiếm khuyết bề mặt tuyệt hảo và màng sơn láng mịn.`,
      preparationSteps: [
        {
          title: 'Bước 1 : Xử lý bề mặt',
          content: {
            new: `
            Để bề mặt tường khô từ 21 - 28 ngày trong điều kiện bình thường. Loại bỏ hết bụi bẩn, dầu mở khỏi bề mặt cần sơn.
            Để có bề mặt nhẵn mịn, sử dụng 2 lớp bột trét nội thất HOASEN ANA.
`,
            old: 'Làm sạch bề mặt, loại bỏ bụi bẩn, lớp sơn cũ. Xử lý các bề mặt bị rong rêu, nấm mốc bằng hoá chất thích hợp. Rửa sạch bề mặt (nếu cần) và để khô ráo hoàn toàn, độ ẩm bề mặt phải <16% (đo bằng Protimeter).',
          },
        },
        {
          title: 'Bước 2 : Sơn lót:',
          content:
            'Sử dụng 1 lớp Sơn lót nội & ngoại thất Sagopaint Sealer Primer',
        },
        {
          title: 'Bước 3 : Sơn phủ:',
          content:
            'Sử dụng 2 lớp Sơn Sagopaint nột thất MÀNG SƠN MỊN ĐẸP V - 2000',
        },
      ],
      tools: 'Cọ, rulô, súng phun',
      thinning: 'Nước sạch',
      thinningRatio: '5-10 % theo thể tích (tùy điều kiện thi công)',
      suggestedSystem: [
        'Bột trét: 2 lớp bột trét nội thất HOASEN ANA',
        'Sơn lót: 1 lớp Sơn lót nội & ngoại thất Sagopaint Sealer Primer',
        'Sơn phủ: 2 lớp phủ Sơn Sagopaint nột thất MÀNG SƠN MỊN ĐẸP V - 2000',
      ],
    },
  },
  {
    id: 'SGP-AMTX-001',
    name: 'Sơn Nội Thất Sagopaint Che Phủ Tối Đa ANA MATEX',
    category: 'interior',
    image: '/images/son_noi_that_ana_matex.png',
    description:
      `Đem lại màng sơn phẳng mịn với công nghệ Titanium DioxideTI - PURE giúp cho màn sơn có độ che phủ tuyệt vời, có thể phủ rộng hơn nhờ có độ che phủ cao.`,
    technicalSpecs: [
      'Độ phủ rất cao',
      'Màu sắc tươi sáng',
      'Chống nấm mốc, bám dính tốt',
      'Màu sơn trắng mịn đẹp, sang trọng',
      'Thân thiện với môi trường nhẹ mùi',
    ],
    notes:
      '*Lưu ý: Khuấy sơn thật kỹ trước khi sử dụng. Sau khi mở nắp phải sử dụng hết.Không thi công khi nhiệt độ không khí <15ºC hay độ ẩm tương đối >80%',
    // Add other relevant fields
    mainInfo: [
      {
        key: 'Thời gian khô',
        value: '30 - 60 phút (tùy điều kiện thời tiết)',
      },
      {
        key: 'Sơn lớp kế tiếp',
        value: '120 phút',
      },
      {
        key: 'Độ phủ lý thuyết',
        value: '10 – 14 m2 / lít/ 1 lớp',
      },
      {
        key: 'Đóng gói',
        value: '5L, 17L',
      },
      {
        key: 'Thành phần',
        value:
          'Nhựa gốc Acrylic & bột khoáng ( 48 – 72% ). Chất phụ gia ( 5 – 10%). Nước(  10 -20% )',
      },
    ],
    features: [
      'Độ phủ rất cao',
      'Màu sắc tươi sáng',
      'Chống nấm mốc, bám dính tốt',
      'Màu sơn trắng mịn đẹp, sang trọng',
      'Thân thiện với môi trường nhẹ mùi',
    ],
    howToApplyContent: {
      productInfoContent:
        `Sơn Nội Thất Sagopaint Che Phủ Tối Đa ANA MATEX là loại sơn nước được pha chế đặc biệc gốc Pure Acrylic có độ bền màu cao.

Sơn Nội Thất Sagopaint Che Phủ Tối Đa ANA MATEX đem lại màng sơn phẳng mịn với công nghệ Titanium Dioxide TI - PURE giúp cho màn sơn có độ che phủ tuyệt vời, có thể phủ rộng hơn nhờ có độ che phủ cao.

Sơn Nội Thất Sagopaint Che Phủ Tối Đa ANA MATEX là loại sơn gốc nước, thân thiện với môi trường có chừa hàm lượng rất thấp các hợp chất hữu cơ dễ bay hơi (VOC) và kim loại nặng, nhẹ mùi.`,
      preparationSteps: [
        {
          title: 'Bước 1 : Xử lý bề mặt',
          content: {
            new: `
            Để bề mặt tường khô từ 21 - 28 ngày trong điều kiện bình thường. Loại bỏ hết bụi bẩn, dầu mở khỏi bề mặt cần sơn.
            Để có bề mặt nhẵn mịn, sử dụng 2 lớp bột trét nội thất HOASEN ANA.`,
            old: 'Làm sạch bề mặt, loại bỏ bụi bẩn, lớp sơn cũ.Xử lý các bề mặt bị rong rêu, nấm mốc bằng hoá chất thích hợp. Rửa sạch bề mặt (nếu cần) và để khô ráo hoàn toàn, độ ẩm bề mặt phải <16% (đo bằng Protimeter).',
          },
        },
        {
          title: 'Bước 2 : Sơn lót:',
          content:
            'Sử dụng 1 lớp sơn lót nội & ngoại thất Sagopaint Sealer Primer',
        },
        {
          title: 'Bước 3 : Sơn phủ:',
          content:
            'Sử dụng 2 lớp sơn Sagopaint nội thất Che Phủ Tối Đa ANA MATEX',
        },
      ],
      tools: 'Cọ, rulô, súng phun',
      thinning: 'Nước sạch',
      thinningRatio: '5-10 % theo thể tích (tùy điều kiện thi công)',
      suggestedSystem: [
        'Bột trét: 2 lớp bột trét nội thất  ANA HOA SEN',
        'Sơn lót: 1 lớp sơn Sagopaint lót nội & ngoại thất Sealer Primer',
        'Sơn phủ: 2 lớp sơn Sagopaint nội thất Che Phủ Tối Đa ANA MATEX',
      ],
    },
  },
  {
    id: 'hoasen-ana',
    name: 'Bột Trét Nội Thất HOASEN ANA',
    category: 'interior',
    image: '/images/bot_tret_noi_that_hoa_sen_ana.png',
    description:
      `Sản phẩm có độ phủ tốt, dễ thi công, mang lại bè mặt láng mịn, màu sắc trắng vượt trội. Được thiết kế để thi công trên những bề mặt tường, trần thô ráp, lồi lõm để làm láng mịn bề mặt bị xước sát lấp các lỗ hổng, vết nứt sâu hoặc để trám phần hư hại do nước trên tường khô.`,
    technicalSpecs: [
      'Tạo bề mặt nhẵn mịn',
      'Dễ dàng xả nhám',
      'Độ che phủ tốt',
    ],
    notes:
      '*Lưu ý: Khuấy sơn thật kỹ trước khi sử dụng. Sau khi mở nắp phải sử dụng hết.Không thi công khi nhiệt độ không khí <15ºC hay độ ẩm tương đối >80%',
    // Add other relevant fields
    mainInfo: [
      {
        key: 'Màu sắc',
        value: 'Màu trắng',
      },
      {
        key: 'Thành phần',
        value: 'Xi măng, Bột đá, Polymer hữu cơ và Phụ gia',
      },
      {
        key: 'Khối lượng thể tích xốp',
        value: '1005 +/- 40g/lít ( bột khô)',
      },
      {
        key: 'Độ phủ lý thuyết',
        value: '1.2- 1.3Kg/m2/ 2 lớp ( tùy thuộc vào bề mặt thi công)',
      }
    ],
    features: ['Tạo bề mặt nhẵn mịn', 'Dễ dàng xả nhám', 'Độ che phủ tốt'],
    howToApplyContent: {
      productInfoContent:
        `Bột trét tường nội thất HOASEN ANA là vật liệu xử lý bề mặt để làm phẳng các bề mặt hồ xây & bê tông.

        Sản phẩm có độ phủ tốt, dễ thi công, mang lại bè mặt láng mịn, màu sắc trắng vượt trội. Được thiết kế để thi công trên những bề mặt tường, trần thô ráp, lồi lõm để làm láng mịn bề mặt bị xước sát lấp các lỗ hổng, vết nứt sâu hoặc để trám phần hư hại do nước trên tường khô.`,
      preparationSteps: [
      ],
      tools: 'Cọ, rulô, súng phun',
      thinning: 'Nước sạch',
      thinningRatio: '5-10 % theo thể tích (tùy điều kiện thi công)',
      suggestedSystem: [
        'Bột trét: 2 lớp bột trét nội thất  ANA HOA SEN',
        'Sơn lót: 1 lớp sơn Sagopaint lót nội & ngoại thất Sealer Primer',
        'Sơn phủ: 2 lớp sơn Sagopaint nội thất Che Phủ Tối Đa ANA MATEX',
      ],
    },
  },
  {
    id: 'SGP-SPR-001',
    name: 'Sơn Sagopaint Lót Nội & Ngoại Thất Sealer Primer',
    category: 'interior',
    image: '/images/son_lot_noi_ngoai_that_sealer_primer.png',
    description:
      `Sơn Sagopaint lót nội & ngoại thất Sealer Primer là loại sơn lót được sản xuất từ nhựa Acrylic với những tính năng: độ bám dính tốt, chống kiềm hiệu quả. Thích hợp sử dụng cho trang trí nội thất & ngoại thất trên bề mặt cũ và mới như: bề mặt hồ vữa, bê tông, xi măng`,
    technicalSpecs: [
      'Chống kiềm hiệu quả',
      'Liên kết bề mặt, tạo độ bám dính tốt cho lớp sơn phủ',
      'Giúp màn sơn láng mịn, đanh chắc, giữ màu cho lớp sơn phủ',
      'Thân thiện với môi trường nhẹ mùi'
    ],
    notes:
      '*Lưu ý: Khuấy sơn thật kỹ trước khi sử dụng. Sau khi mở nắp phải sử dụng hết.Không thi công khi nhiệt độ không khí <15ºC hay độ ẩm tương đối >80%',
    // Add other relevant fields
    mainInfo: [
      {
        key: 'Thời gian khô',
        value: '30 - 60 phút (tùy điều kiện thời tiết)',
      },
      {
        key: 'Sơn lớp kế tiếp',
        value: '120 phút',
      },
      {
        key: 'Độ phủ lý thuyết',
        value: '10 – 12 m2 / lít/ 1 lớp',
      },
      {
        key: 'Đóng gói',
        value: '5L, 17L',
      },
      {
        key: 'Thành phần',
        value:
          'Nhựa gốc Acrylic & bột khoáng ( 48 – 72% ). Chất phụ gia ( 5 – 10%). Nước(  10 -20% )',
      },
    ],
    features: [
      'Chống kiềm hiệu quả',
      'Liên kết bề mặt, tạo độ bám dính tốt cho lớp sơn phủ',
      'Giúp màn sơn láng mịn, đanh chắc, giữ màu cho lớp sơn phủ',
      'Thân thiện với môi trường nhẹ mùi'
    ],
    howToApplyContent: {
      productInfoContent:
        `Sơn Sagopaint lót nội & ngoại thất Sealer Primer là loại sơn lót được sản xuất từ nhựa Acrylic với những tính năng: độ bám dính tốt, chống kiềm hiệu quả. Thích hợp sử dụng cho trang trí nội thất & ngoại thất trên bề mặt cũ và mới như: bề mặt hồ vữa, bê tông, xi măng …

Sơn Sagopaint lót nội & ngoại thất Sealer Primer  là sản phẩm không những có khả năng chống kiềm vượt trội giúp bảo vệ màng sơn bền đẹp dài lâu mà còn thấm sâu vào bề mặt tường và tạo một lớp lót hoàn hảo.`,
      preparationSteps: [
        {
          title: 'Bước 1 : Xử lý bề mặt',
          content: {
            new: `
           Để bề mặt tường khô từ 21 - 28 ngày trong điều kiện bình thường. Loại bỏ hết bụi bẩn, dầu mở khỏi bề mặt cần sơn.
Để có bề mặt nhẵn mịn, sử dụng 2 lớp bột trét nội thất HOASEN ANA.`,
            old: `
            Làm sạch bề mặt, loại bỏ bụi bẩn, lớp sơn cũ. Xử lý các bề mặt bị rong rêu, nấm mốc bằng hoá chất thích hợp. Rửa sạch bề mặt (nếu cần) và để khô ráo hoàn toàn, độ ẩm bề mặt phải <16% (đo bằng Protimeter).`,
          },
        },
        {
          title: 'Bước 2 : Sơn lót:',
          content:
            'Sử dụng 1 lớp sơn lót nội & ngoại thất Sagopaint Sealer Primer',
        }
      ],
      tools: 'Cọ, rulô, súng phun',
      thinning: 'Nước sạch',
      thinningRatio: '5-10 % theo thể tích (tùy điều kiện thi công)',
      suggestedSystem: [
        'Bột trét: 2 lớp bột trét nội thất HOASEN ANA',
        'Sơn lót:  1 lớp Sơn Sagopaint lót nội & ngoại thất Sealer Primer'
      ],
    },
  },
  {
    id: 'SGP-ANSH-BBM-001',
    name: 'Sơn Ngoại Thất Chống Phai Màu Anashield - Bề Mặt Bóng Mờ',
    category: 'exterior',
    image: '/images/son_ngoai_that_ana_shield.png',
    description:
      'Là một loại sơn gốc nước thân thiện với môi trường có chừa hàm lượng rất thấp các hợp chất hữu cơ dễ bay hơi (VOC) và nhẹ mùi',
    technicalSpecs: [
      'Chống phai màu, Màu sắc bền đẹp',
      'Độ che phủ tốt, che phủ vết nứt nhỏ',
      'Chống rêu mối gấp 2 lần',
      'Bảo vệ 8 năm',
    ],
    notes:
      '*Lưu ý: Khuấy sơn thật kỹ trước khi sử dụng. Sau khi mở nắp phải sử dụng hết.Không thi công khi nhiệt độ không khí < 15ºC hay độ ẩm tương đối >80%',
    // Add other relevant fields
    mainInfo: [
      {
        key: 'Thời gian khô',
        value: '30 - 60 phút (tùy điều kiện thời tiết)',
      },
      {
        key: 'Sơn lớp kế tiếp',
        value: '120 phút',
      },
      {
        key: 'Độ phủ lý thuyết',
        value: '10 – 12 m2 / lít/ 1 lớp',
      },
      {
        key: 'Đóng gói',
        value: '1L, 5L, 17L',
      },
      {
        key: 'Thành phần',
        value:
          'Nhựa gốc Acrylic & bột khoáng ( 48 – 72% ). Chất phụ gia ( 5 – 10%). Nước(  10 -20% )',
      },
    ],
    features: [
      'Chống phai màu, Màu sắc bền đẹp',
      'Độ che phủ tốt, che phủ vết nứt nhỏ',
      'Chống rêu mối gấp 2 lần',
      'Bảo vệ 8 năm',
    ],
    howToApplyContent: {
      productInfoContent: `Sơn ngoại thất Sagopaint  Chống Phai Màu Anashield  –bề mặt bóng mờ được chế tạo từ nhựa pure Acrylic nguyên chất 100% kết hợp  nhựa silicon với cấu trúc ma trận kép Nano - Quartz tích hợp cho lớp phủ sơn mặt tiền, được cung cấp bảo vệ màng phim chống lại sự tấn công của tảo và nấm mốc gấp 2 lần

Với công nghệ SLOW RELEASE chống nấm mốc gấp 2 lần, giúp các hạt phân tử có khả năng giải phóng thông minh, bám chắc và  hoạt động linh hoạt trên bề mặt sơn, ngăn chặn hiệu quả sự phát triển của rêu mốc, lâu dài hơn gấp 2 lần, giúp bảo vệ màng sơn bền đẹp lâu hơn gấp 2 lần.

Những hạt Silicon trong sơn có khả năng chống thấm hoàn hảo, bảo vệ công trình khỏi những tác động của nước mưa, ẩm ướt, chống bám bụi bẩn
Sơn Sagopaint ngoại thất Chống Phai Màu Anashield  – bề mặt bóng mờ là một loại sơn gốc nước , thân thiện với môi trường có chứa hàm lượng rất thấp các hợp chất hữu cơ dễ bay hơi (VOC) và nhẹ mùi`,
      preparationSteps: [
        {
          title: 'Bước 1 : Xử lý bề mặt',
          content: {
            new: `Để bề mặt tường khô từ 21 - 28 ngày trong điều kiện bình thường. Loại bỏ hết bụi bẩn, dầu mở khỏi bề mặt cần sơn.
Để có bề mặt nhẵn mịn, sử dụng 2 lớp bột trét ngoại thất HOASEN ANA.
‍`,
            old: `Làm sạch bề mặt, loại bỏ bụi bẩn, lớp sơn cũ. Xử lý các bề mặt bị rong rêu, nấm mốc bằng hoá chất thích hợp. Rửa sạch bề mặt (nếu cần)và để khô ráo hoàn toàn, độ ẩm bề mặt phải <16% (đo bằng Protimeter).`,
          },
        },
        {
          title: 'Bước 2 : Sơn lót:',
          content:
            'Sử dụng 1 lớp sơn Sagopaint lót chống kiềm nội & ngoại thất  AnaSealer',
        },
        {
          title: 'Bước 3 : Sơn phủ:',
          content:
            'Sử dụng 2 lớp Sơn Sagopaint ngoại thất Chống Phai Màu Anashield  – bề mặt bóng mờ',
        },
      ],
      tools: 'Cọ, rulô, súng phun',
      thinning: 'Nước sạch',
      thinningRatio: '5-10 % theo thể tích (tùy điều kiện thi công)',
      suggestedSystem: [
        'Bột trét: 2 lớp bột trét ngoại thất HOASEN ANA',
        'Sơn lót: 1 lớp sơn Sagopaint lót chống kiềm nội & ngoại thất  AnaSealer',
        'Sơn phủ: 2 lớp Sơn Sagopaint ngoại thất Chống Phai Màu Anashield  – bề mặt bóng mờ',
      ],
    },
  },
  {
    id: 'SGP-SPR-001',
    name: 'Sơn Sagopaint Lót Nội & Ngoại Thất Sealer Primer',
    category: 'exterior',
    image: '/images/son_lot_noi_ngoai_that_sealer_primer.png',
    description:
      `Sơn Sagopaint lót nội & ngoại thất Sealer Primer là loại sơn lót được sản xuất từ nhựa Acrylic với những tính năng: độ bám dính tốt, chống kiềm hiệu quả. Thích hợp sử dụng cho trang trí nội thất & ngoại thất trên bề mặt cũ và mới như: bề mặt hồ vữa, bê tông, xi măng`,
    technicalSpecs: [
      'Chống kiềm hiệu quả',
      'Liên kết bề mặt, tạo độ bám dính tốt cho lớp sơn phủ',
      'Giúp màn sơn láng mịn, đanh chắc, giữ màu cho lớp sơn phủ',
      'Thân thiện với môi trường nhẹ mùi'
    ],
    notes:
      '*Lưu ý: Khuấy sơn thật kỹ trước khi sử dụng. Sau khi mở nắp phải sử dụng hết.Không thi công khi nhiệt độ không khí <15ºC hay độ ẩm tương đối >80%',
    // Add other relevant fields
    mainInfo: [
      {
        key: 'Thời gian khô',
        value: '30 - 60 phút (tùy điều kiện thời tiết)',
      },
      {
        key: 'Sơn lớp kế tiếp',
        value: '120 phút',
      },
      {
        key: 'Độ phủ lý thuyết',
        value: '10 – 12 m2 / lít/ 1 lớp',
      },
      {
        key: 'Đóng gói',
        value: '5L, 17L',
      },
      {
        key: 'Thành phần',
        value:
          'Nhựa gốc Acrylic & bột khoáng ( 48 – 72% ). Chất phụ gia ( 5 – 10%). Nước(  10 -20% )',
      },
    ],
    features: [
      'Chống kiềm hiệu quả',
      'Liên kết bề mặt, tạo độ bám dính tốt cho lớp sơn phủ',
      'Giúp màn sơn láng mịn, đanh chắc, giữ màu cho lớp sơn phủ',
      'Thân thiện với môi trường nhẹ mùi'
    ],
    howToApplyContent: {
      productInfoContent:
        `Sơn Sagopaint lót nội & ngoại thất Sealer Primer là loại sơn lót được sản xuất từ nhựa Acrylic với những tính năng: độ bám dính tốt, chống kiềm hiệu quả. Thích hợp sử dụng cho trang trí nội thất & ngoại thất trên bề mặt cũ và mới như: bề mặt hồ vữa, bê tông, xi măng …

Sơn Sagopaint lót nội & ngoại thất Sealer Primer  là sản phẩm không những có khả năng chống kiềm vượt trội giúp bảo vệ màng sơn bền đẹp dài lâu mà còn thấm sâu vào bề mặt tường và tạo một lớp lót hoàn hảo.`,
      preparationSteps: [
        {
          title: 'Bước 1 : Xử lý bề mặt',
          content: {
            new: `
           Để bề mặt tường khô từ 21 - 28 ngày trong điều kiện bình thường. Loại bỏ hết bụi bẩn, dầu mở khỏi bề mặt cần sơn.
Để có bề mặt nhẵn mịn, sử dụng 2 lớp bột trét nội thất HOASEN ANA.`,
            old: `
            Làm sạch bề mặt, loại bỏ bụi bẩn, lớp sơn cũ. Xử lý các bề mặt bị rong rêu, nấm mốc bằng hoá chất thích hợp. Rửa sạch bề mặt (nếu cần) và để khô ráo hoàn toàn, độ ẩm bề mặt phải <16% (đo bằng Protimeter).`,
          },
        },
        {
          title: 'Bước 2 : Sơn lót:',
          content:
            'Sử dụng 1 lớp sơn lót nội & ngoại thất Sagopaint Sealer Primer',
        }
      ],
      tools: 'Cọ, rulô, súng phun',
      thinning: 'Nước sạch',
      thinningRatio: '5-10 % theo thể tích (tùy điều kiện thi công)',
      suggestedSystem: [
        'Bột trét: 2 lớp bột trét nội thất HOASEN ANA',
        'Sơn lót:  1 lớp Sơn Sagopaint lót nội & ngoại thất Sealer Primer'
      ],
    },
  },
];
