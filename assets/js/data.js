/* ============================================================
 *  「大圩古镇」文旅主题网站 —— 数据层（我的家乡：桂林市灵川县大圩镇）
 *  图片：assets/img/spot-*.jpg（本项目实拍照片，已统一转 JPEG 并压缩）
 *  视频：assets/video/*.mp4（本项目实拍视频，已转码为网页可播的 720p）
 *  门票与开放时间会随季节调整，出行前请以官方公告为准。
 * ============================================================ */

const SITE = {
  name: '大圩古镇',
  slogan: '漓江第一古镇 · 千年圩市烟火',
  subtitle: '广西四大古镇之一 · 桂林市灵川县',
  intro: '大圩镇地处桂林市灵川县东南、漓江东岸，距桂林市区约 20 公里。古镇始建于北宋、兴盛于明清，是古代漓江水运的重要商埠。今天的青石板老街、万寿桥、会馆与古码头依然完整，周边又有古东瀑布、冠岩、毛洲岛与磨盘山码头，是一座把山水、古镇与烟火气叠在一起的小镇。'
};

const CATEGORIES = [
  { key: 'history', name: '古镇古迹', icon: '🏯', color: '#c96a4a', desc: '青石板老街与会馆里的百年商埠' },
  { key: 'nature',  name: '漓江山水', icon: '⛰️', color: '#2fa37c', desc: '瀑布、溶洞、江心岛与漓江游船' },
  { key: 'culture', name: '民俗体验', icon: '🎭', color: '#9b72cf', desc: '赶圩、看戏、渔火与手作' },
  { key: 'food',    name: '特色美食', icon: '🍜', color: '#f2a03d', desc: '一碗米粉开始的大圩日常' },
  { key: 'red',     name: '红色研学', icon: '🚩', color: '#e05a4a', desc: '在纪念馆里读懂桂北的往事' },
  { key: 'leisure', name: '田园休闲', icon: '🌾', color: '#5b8def', desc: '采摘、骑行、江畔与民宿' }
];

const IMG = {
  oldstreet: 'assets/img/spot-oldstreet.jpg',
  wanshouqiao: 'assets/img/spot-wanshouqiao.jpg',
  guildhall: 'assets/img/spot-guildhall.jpg',
  wharf: 'assets/img/spot-wharf.jpg',
  xiongcun: 'assets/img/spot-xiongcun.jpg',
  gudong: 'assets/img/spot-gudong.jpg',
  guanyan: 'assets/img/spot-guanyan.jpg',
  maozhoudao: 'assets/img/spot-maozhoudao.jpg',
  mopanshan: 'assets/img/spot-mopanshan.jpg',
  fengweizhu: 'assets/img/spot-fengweizhu.jpg',
  ganxu: 'assets/img/spot-ganxu.jpg',
  caidiao: 'assets/img/spot-caidiao.jpg',
  yuhuo: 'assets/img/spot-yuhuo.jpg',
  zhubian: 'assets/img/spot-zhubian.jpg',
  mifen: 'assets/img/spot-mifen.jpg',
  pijiuyu: 'assets/img/spot-pijiuyu.jpg',
  youcha: 'assets/img/spot-youcha.jpg',
  baiguoya: 'assets/img/spot-baiguoya.jpg',
  chuanshanggao: 'assets/img/spot-chuanshanggao.jpg',
  zhutongfan: 'assets/img/spot-zhutongfan.jpg',
  lingtian: 'assets/img/spot-lingtian.jpg',
  baluban: 'assets/img/spot-baluban.jpg',
  caomei: 'assets/img/spot-caomei.jpg',
  lvdao: 'assets/img/spot-lvdao.jpg',
  gudongminsu: 'assets/img/spot-gudongminsu.jpg',
  jiangpanluying: 'assets/img/spot-jiangpanluying.jpg',
  hero: 'assets/img/hero-daxu.jpg'
};

const SPOTS = [
  {
    id: 'oldstreet', name: '大圩古镇老街', cat: 'history', img: IMG.oldstreet,
    rating: 4.7, level: '广西四大古镇之一 · 免费开放', price: 0, priceText: '免费',
    hours: '全天（商铺 8:30–21:00）', district: '古镇核心区', months: [3, 4, 5, 6, 9, 10, 11],
    tags: ['青石板路', '明清骑楼', '必打卡'],
    intro: '老街沿漓江铺开，长约 1.5 公里，两侧是保存较好的明清骑楼与木板门面，脚下是被几百年脚步磨得发亮的青石板。清晨与黄昏是它最安静、也最像"古镇"的时候。',
    highlights: ['青石板街面与老式木板门铺，随手一拍就是老照片质感', '沿街的老茶馆、铁匠铺、豆腐坊，仍在做本地人的生意', '街口的古榕树与老码头石阶，是居民日常聚集地'],
    tips: '建议清晨 7—9 点或傍晚 17 点后逛，避开团队游客；老街是居民生活区，拍照请注意不要打扰住户。'
  },
  {
    id: 'wanshouqiao', name: '万寿桥', cat: 'history', img: IMG.wanshouqiao,
    rating: 4.5, level: '古镇地标 · 古石拱桥', price: 0, priceText: '免费',
    hours: '全天', district: '古镇核心区', months: [3, 4, 5, 6, 9, 10, 11],
    tags: ['古桥', '拍照', '免费'],
    intro: '万寿桥横跨古镇旁的马河，是古镇最具辨识度的地标。石拱、桥墩与两岸的老屋一起倒映在水里，桥头常有老人闲坐，是最能感受小镇节奏的地方。',
    highlights: ['桥拱与水面倒影构成完整圆形，是经典的取景点', '桥头连接老街与古码头，是动线的天然枢纽', '雨后水涨时桥洞景观最佳'],
    tips: '桥面较窄，会车与停留拍照时注意避让；清晨薄雾时分光线最柔和。'
  },
  {
    id: 'guildhall', name: '江西会馆 · 湖南会馆', cat: 'history', img: IMG.guildhall,
    rating: 4.3, level: '古镇商埠遗存', price: 0, priceText: '外观免费参观（内部开放以现场公告为准）',
    hours: '9:00–17:00', district: '古镇核心区', months: [3, 4, 5, 9, 10, 11],
    tags: ['会馆', '商埠历史', '建筑'],
    intro: '明清时期，江西、湖南、广东等地商人沿漓江水路到大圩经商，先后建起多座会馆。这些建筑是大圩"商埠基因"最直接的证据，也记录了桂北与外省的贸易往来。',
    highlights: ['封火墙、青砖马头墙与木构架，体现典型岭南—桂北做法', '馆内的碑刻记录着当年商号捐资与行规', '与老街、清真寺可串成一条 1 小时的商埠文化小环线'],
    tips: '部分建筑仍在维护，能否入内以现场公告为准；请勿触碰碑刻与木构件。'
  },
  {
    id: 'wharf', name: '大圩古码头', cat: 'history', img: IMG.wharf,
    rating: 4.4, level: '明清码头遗址', price: 0, priceText: '免费',
    hours: '全天', district: '古镇核心区', months: [4, 5, 6, 9, 10],
    tags: ['古码头', '江景', '日落'],
    intro: '古镇因水运而兴，沿漓江曾分布着十余处码头。现存石阶与缆船石仍清晰可辨，站在码头边，可以想象当年商船云集、货担上下的热闹场面。',
    highlights: ['多级石阶直接伸入漓江，是研究水运史的实物', '傍晚可观江面日落与对岸峰林剪影', '常有竹筏停靠，可近距离拍到鱼鹰'],
    tips: '石阶湿滑，江边请注意安全；汛期水位上涨时不要下到最低几级台阶。'
  },
  {
    id: 'xiongcun', name: '熊村古民居群', cat: 'history', img: IMG.xiongcun,
    rating: 4.2, level: '传统村落 · 免费', price: 0, priceText: '免费',
    hours: '全天（请白天前往）', district: '熊村', months: [3, 4, 5, 9, 10, 11],
    tags: ['古民居', '小众', '摄影'],
    intro: '位于大圩镇熊村，保存着成片的桂北传统民居：青砖黛瓦、马头墙、天井与青石巷，几乎没有商业化改造，是喜欢安静与建筑摄影的旅行者会喜欢的地方。',
    highlights: ['连片的马头墙与天井院落，格局完整', '村中古树与晒谷场，生活气息浓厚', '游客稀少，可从容构图'],
    tips: '属生活村落，请勿擅自进入住户院内；建议白天前往，村道较窄，自驾注意会车。'
  },
  {
    id: 'gudong', name: '古东瀑布', cat: 'nature', img: IMG.gudong,
    rating: 4.6, level: '国家 4A 景区', price: 75, priceText: '¥75（含攀瀑装备，具体以官方为准）',
    hours: '8:30–17:00（夏季玩水项目视水量开放）', district: '古东村', months: [5, 6, 7, 8, 9, 10],
    tags: ['可以爬的瀑布', '玩水', '亲子'],
    intro: '古东瀑布是国内少见的"可以爬的瀑布"，多级跌水沿岩壁层层跌落，游客穿戴安全装备后可以抓着铁链逆流而上，被称为"走瀑戏浪"。',
    highlights: ['走瀑戏浪：穿草鞋、戴头盔，沿瀑布逐级向上攀爬', '多级跌水与深潭，夏季凉爽，是天然的避暑地', '山顶吊桥与森林步道，可俯瞰整条瀑布'],
    tips: '必须换上景区提供的装备并听从教练指挥；手机相机请做好防水；雨大或水量过大时项目会临时关闭。'
  },
  {
    id: 'guanyan', name: '冠岩景区', cat: 'nature', img: IMG.guanyan,
    rating: 4.4, level: '国家 4A 景区 · 漓江畔大型溶洞', price: 65, priceText: '¥65 起（含小火车/游船项目以套票为准）',
    hours: '8:00–17:00', district: '冠山村', months: [4, 5, 6, 7, 8, 9, 10],
    tags: ['溶洞', '地下河', '小火车'],
    intro: '冠岩位于漓江东岸，是一处规模宏大的喀斯特溶洞，洞内有地下暗河。景区用观光小火车、游船与电梯把"旱洞—水洞"串成一条完整的游览线，被称作"漓江的明珠"。',
    highlights: ['观光小火车穿越洞厅，是孩子们最爱的一段', '地下河游船：在钟乳石之间穿行', '洞内钟乳石密集，灯光设计较成熟'],
    tips: '洞内常年 18—20℃，夏季也要带一件薄外套；地面湿滑请穿防滑鞋；拍照请关闭闪光灯。'
  },
  {
    id: 'maozhoudao', name: '毛洲岛', cat: 'nature', img: IMG.maozhoudao,
    rating: 4.3, level: '漓江江心岛 · 农家乐', price: 0, priceText: '免费上岛（渡船/餐饮另计）',
    hours: '8:00–18:00（渡船以水位与天气为准）', district: '毛洲岛', months: [4, 5, 6, 9, 10],
    tags: ['江心岛', '农家乐', '亲子'],
    intro: '毛洲岛是漓江上的一个江心小岛，岛上以果园、菜地和农家院落为主。坐小船过江，在岛上午饭、摘果、看江，是被低估的一种"漓江慢生活"玩法。',
    highlights: ['坐渡船登岛，江面视角看两岸峰林', '岛上果园按季节可采摘柑橘、柚子等', '农家菜与河鲜是主要吸引力'],
    tips: '渡船班次受水位与天气影响，出发前先向村里确认；汛期可能停航，务必关注安全提示。'
  },
  {
    id: 'mopanshan', name: '磨盘山码头 · 漓江精华段游船', cat: 'nature', img: IMG.mopanshan,
    rating: 4.5, level: '漓江游览经典航线', price: 215, priceText: '¥215 起（游船票，随船型与季节浮动）',
    hours: '每日上午发船（需提前订票）', district: '磨盘山', months: [4, 5, 6, 7, 8, 9, 10],
    tags: ['游船', '漓江', '招牌体验'],
    intro: '磨盘山码头就在大圩镇，是桂林—阳朔漓江游览航线的起点之一。从这里登船，可以完整走过漓江最精华的一段，看尽峰林、江湾、竹林与渔村。',
    highlights: ['甲板上看喀斯特峰林一座接一座地展开', '途中经过竹林、浅滩与鸬鹚捕鱼', '是"来桂林必做一次"的经典项目'],
    tips: '旺季务必提前 1—2 天订票并确认码头；船上风大，注意防晒与保暖；行程约 4 小时，提前做好准备。'
  },
  {
    id: 'fengweizhu', name: '漓江东岸凤尾竹林', cat: 'nature', img: IMG.fengweizhu,
    rating: 4.1, level: '免费江岸景观', price: 0, priceText: '免费',
    hours: '全天', district: '东岸村', months: [4, 5, 6, 7, 8, 9, 10],
    tags: ['竹林', '徒步', '免费'],
    intro: '大圩沿江一带成片生长着凤尾竹，风一过便整片摇动。江边土路平坦好走，是本地人散步、垂钓与放牛的日常路线，也适合安排一段轻松的徒步。',
    highlights: ['竹林、江湾与远处峰林同框，构图很干净', '沿途有石埠头可以下到江边', '人少安静，适合清晨或黄昏慢走'],
    tips: '夏季蚊虫较多请备驱蚊液；雨后土路泥泞，建议穿运动鞋。'
  },
  {
    id: 'ganxu', name: '大圩圩日 · 赶圩', cat: 'culture', img: IMG.ganxu,
    rating: 4.6, level: '活着的传统集市', price: 0, priceText: '免费（购物另计）',
    hours: '圩日清晨至中午（当地圩期以现场公告为准）', district: '古镇核心区', months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
    tags: ['赶圩', '烟火气', '人文摄影'],
    intro: '"圩"是桂北乡村最鲜活的场景：周边村民挑着自家种的菜、编的竹器、做的粑粑来赶集，街上一整上午都热气腾腾。想看真实的本地生活，赶圩比任何景点都值得。',
    highlights: ['时令果蔬、竹编农具、草药与本地小吃一应俱全', '老人聚在茶馆里喝茶听戏，是最生动的市井画面', '物价便宜，可以买些当季水果带走'],
    tips: '圩日人多、停车困难，建议步行或早到；拍摄人物请先征得对方同意。'
  },
  {
    id: 'caidiao', name: '桂剧 · 彩调表演', cat: 'culture', img: IMG.caidiao,
    rating: 4.2, level: '地方戏曲 · 传统剧种', price: 0, priceText: '免费观演 / 专场演出另行售票',
    hours: '节庆与圩日不定期演出（以现场公告为准）', district: '古镇核心区', months: [1, 2, 3, 4, 10, 11, 12],
    tags: ['戏曲', '非遗', '夜场'],
    intro: '桂剧与彩调是桂北最有代表性的两个剧种，唱腔明快、语言通俗，常在节庆与圩日搭台演出。台下坐着的多是本地老人，台上唱的是几代人耳熟能详的故事。',
    highlights: ['彩调的扇子与手帕功夫，动作诙谐', '桂剧唱腔高亢，锣鼓点密集', '演出多在露天戏台，随时可以站下来看一段'],
    tips: '演出时间不固定，可到镇上或向民宿主人打听；听不懂方言也没关系，看身段与锣鼓同样有意思。'
  },
  {
    id: 'yuhuo', name: '漓江渔火 · 鸬鹚捕鱼', cat: 'culture', img: IMG.yuhuo,
    rating: 4.3, level: '传统渔事体验项目', price: 60, priceText: '体验项目 ¥60–120（以经营方为准）',
    hours: '18:30–20:30（夜间项目）', district: '古镇核心区', months: [4, 5, 6, 9, 10],
    tags: ['夜游', '渔火', '摄影'],
    intro: '天黑后，渔翁撑着竹筏、点上汽灯，让鸬鹚下水捕鱼——这是漓江延续了上百年的渔事画面，如今仍可作为体验项目参与，也是夜景摄影的经典题材。',
    highlights: ['竹筏、渔火与鸬鹚同框，画面极具辨识度', '可跟随渔翁出江，近距离观察捕鱼过程', '夜幕下的江面与峰林剪影同样出片'],
    tips: '夜晚江面风凉请加衣；请使用防水装备保护相机；参与体验要选择有资质的经营方并穿好救生衣。'
  },
  {
    id: 'zhubian', name: '竹编 · 草编手作体验', cat: 'culture', img: IMG.zhubian,
    rating: 4.0, level: '传统手工艺体验', price: 50, priceText: '体验 ¥50–100（成品可带走）',
    hours: '9:00–17:00（需提前预约）', district: '古镇核心区', months: [3, 4, 5, 9, 10, 11],
    tags: ['手作', '亲子', '非遗'],
    intro: '大圩一带竹子资源丰富，竹编筐篮、鱼篓与草编器物至今仍是赶圩上的常见商品。跟着手艺人学编一个小篮子，是把"家乡记忆"带回家的最好方式。',
    highlights: ['从破篾到收口，完整体验一件器物的诞生', '作品实用，编好的小篮可以直接用', '适合亲子，孩子通常能专注很久'],
    tips: '竹篾锋利，儿童需家长陪同；建议提前 1 天预约，手艺人有自己的农活节奏。'
  },
  {
    id: 'mifen', name: '桂林米粉', cat: 'food', img: IMG.mifen,
    rating: 4.8, level: '家乡味道第一名', price: 0, priceText: '¥5–15 / 碗',
    hours: '6:30–14:00（不少店只做早午市）', district: '古镇核心区', months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tags: ['早餐', '必吃', '便宜'],
    intro: '大圩人的一天从一碗米粉开始：卤水、锅烧、卤牛肉、酸豆角、花生、葱花，先干拌吃到剩三分之一，再舀一勺骨头汤，这是本地人默认的吃法。',
    highlights: ['卤水是灵魂，每家配方都不一样', '先干拌后加汤，是本地的"标准吃法"', '价格亲民，五到十块钱吃到饱'],
    tips: '想吃最地道的，就找早上排队最长的那家；辣椒与酸笋自取，不能吃辣记得提前说。'
  },
  {
    id: 'pijiuyu', name: '漓江啤酒鱼', cat: 'food', img: IMG.pijiuyu,
    rating: 4.6, level: '桂北招牌菜', price: 0, priceText: '人均 ¥60–100',
    hours: '11:00–21:00', district: '古镇核心区', months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    tags: ['招牌菜', '河鲜', '聚会'],
    intro: '用漓江的鲜活鱼，加啤酒、番茄与辣椒焖煮，鱼皮微焦、汤汁浓稠，是桂北最有辨识度的一道菜。江边的小馆子现点现做，适合三五个人围着一锅吃。',
    highlights: ['鱼皮略焦、鱼肉嫩，啤酒去腥提鲜', '番茄与辣椒的酸辣平衡得很好', '汤汁拌饭是隐藏吃法'],
    tips: '按斤计价，点单前先确认价格与斤两；部分店可指定剑骨鱼等本地鱼种，价格会更高。'
  },
  {
    id: 'youcha', name: '油茶 · 艾叶粑', cat: 'food', img: IMG.youcha,
    rating: 4.4, level: '桂北日常饮食', price: 0, priceText: '¥10–25 / 人',
    hours: '7:00–20:00', district: '古镇核心区', months: [1, 2, 3, 4, 10, 11, 12],
    tags: ['小吃', '本地日常', '祛湿'],
    intro: '油茶是把茶叶、姜、蒜在茶锅里捶打后煮出的咸香茶汤，配上炒米与葱花，初尝微苦、越喝越上头；艾叶粑则用春季嫩艾和糯米做成，清香软糯。',
    highlights: ['"一苦二甘三回味"，油茶的层次很特别', '艾叶粑只在春天最香，清明前后最佳', '本地人常配炒米、花生一起喝'],
    tips: '第一次喝可以少加姜；油茶偏咸，怕苦的可以多加炒米；艾叶粑趁热吃口感最好。'
  },
  {
    id: 'baiguoya', name: '灵川白果炖老鸭', cat: 'food', img: IMG.baiguoya,
    rating: 4.3, level: '灵川传统菜', price: 0, priceText: '¥68–128 / 份',
    hours: '11:00–21:00', district: '古镇核心区', months: [9, 10, 11, 12, 1, 2],
    tags: ['秋冬进补', '本地食材', '家常'],
    intro: '灵川是白果（银杏）的重要产地，秋冬季用白果与老鸭同炖，汤色清亮、果仁软糯，是本地人家里常做的一道滋补菜。',
    highlights: ['白果软糯微苦，与鸭汤的鲜甜互补', '秋冬季节限定，应季而食', '大圩与灵川县城的多数家常菜馆都能吃到'],
    tips: '白果一次不宜多吃，老人儿童适量；菜品需炖煮，建议提前电话预订。'
  },
  {
    id: 'chuanshanggao', name: '船上糕 · 松糕', cat: 'food', img: IMG.chuanshanggao,
    rating: 4.1, level: '桂林传统糕点', price: 0, priceText: '¥5–20',
    hours: '7:00–18:00', district: '古镇核心区', months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
    tags: ['糕点', '小吃', '伴手礼'],
    intro: '船上糕是桂林一带的传统米糕，蒸好后切成块，外层微焦、内里软糯，带着米香与花生碎的颗粒感；松糕则更蓬松清甜，圩日摊位上常见。',
    highlights: ['现蒸现切，趁热吃口感最好', '价格便宜，是很实在的伴手礼', '圩日和老街口的小摊最集中'],
    tips: '建议上午购买，下午常已售完；糕点偏甜，可搭配油茶一起吃。'
  },
  {
    id: 'zhutongfan', name: '竹筒饭 · 漓江河鲜', cat: 'food', img: IMG.zhutongfan,
    rating: 4.2, level: '江边风味', price: 0, priceText: '人均 ¥50–90',
    hours: '11:00–21:00', district: '毛洲岛', months: [4, 5, 6, 7, 8, 9, 10],
    tags: ['江鲜', '农家菜', '尝鲜'],
    intro: '把糯米、腊肉与配料装进新鲜竹筒里烤熟，竹子清香会渗进饭里；配上江里的小鱼小虾与当季蔬菜，是毛洲岛与江边农家最常见的饭菜组合。',
    highlights: ['竹筒饭带着竹膜清香，冷了也好吃', '小河鱼煎至两面金黄，是下饭神器', '农家自种的时蔬，简单炒就很鲜'],
    tips: '河鲜讲究时令，点单前先问当天有什么；竹筒饭需要现烤，耐心等 20 分钟左右。'
  },
  {
    id: 'lingtian', name: '桂北武装起义纪念园', cat: 'red', img: IMG.lingtian,
    rating: 4.3, level: '县级爱国主义教育基地', price: 0, priceText: '免费（团队讲解需预约）',
    hours: '9:00–17:00', district: '灵田镇', months: [3, 4, 5, 6, 7, 9, 10],
    tags: ['红色', '纪念碑', '研学'],
    intro: '位于灵川县灵田镇，是为纪念桂北武装起义而建的纪念园。园内有纪念碑、纪念广场与事迹陈列，是灵川县域内开展爱国主义教育与主题党日活动的重要场所。',
    highlights: ['纪念碑与广场适合举行献花、宣誓等仪式', '陈列讲述桂北地区的革命斗争脉络', '与大圩古镇可安排在同一天的研学线路上'],
    tips: '团体参观建议提前 3 个工作日预约；园内请保持肃穆，勿大声喧哗。'
  },
  {
    id: 'baluban', name: '八路军桂林办事处纪念馆', cat: 'red', img: IMG.baluban,
    rating: 4.5, level: '全国爱国主义教育示范基地', price: 0, priceText: '免费（需预约）',
    hours: '9:00–17:00（周一闭馆）', district: '桂林市区', months: [3, 4, 5, 6, 7, 9, 10],
    tags: ['红色', '纪念馆', '免费'],
    intro: '位于桂林市区，是抗战时期八路军在桂林设立的公开办事机构旧址，在统战联络、转运物资与护送人员方面发挥过重要作用，旧址与陈列均保存完整。',
    highlights: ['旧址院落格局完整，场景复原度高', '大量史料照片与实物展品', '适合与市区行程组合，距大圩约 40 分钟车程'],
    tips: '需实名预约并携带证件；周一闭馆，安排行程时注意避开。'
  },
  {
    id: 'caomei', name: '大圩草莓采摘园', cat: 'leisure', img: IMG.caomei,
    rating: 4.4, level: '近郊采摘 · 季节限定', price: 30, priceText: '入园 ¥30 左右，采摘按斤计价',
    hours: '9:00–17:30（12 月—次年 4 月）', district: '东岸村', months: [12, 1, 2, 3, 4],
    tags: ['采摘', '亲子', '冬季'],
    intro: '大圩一带有不少草莓种植园，冬春季节开放采摘。大棚里温度适宜，带孩子蹲在垄间挑最红的那颗，是冬天最受欢迎的家庭活动。',
    highlights: ['现摘现吃，甜度比市售更高', '棚内不受天气影响，雨天也能玩', '多数园区还提供草莓制品与小食'],
    tips: '采摘前先问清入园费与斤价；穿易清洗的鞋子，棚内泥土较多；请勿踩踏未结果的垄。'
  },
  {
    id: 'lvdao', name: '漓江东岸骑行绿道', cat: 'leisure', img: IMG.lvdao,
    rating: 4.2, level: '免费开放', price: 0, priceText: '免费（租自行车另计）',
    hours: '全天（建议白天）', district: '东岸村', months: [3, 4, 5, 6, 9, 10, 11],
    tags: ['骑行', '免费', '户外'],
    intro: '沿江的乡道车少、风景好，从古镇出发一路经过竹林、果园与村落，是骑行爱好者很容易上手的一段路线，也是拍"峰林 + 田园"同框的好地方。',
    highlights: ['路面平缓，全程基本无大坡', '沿途随时可以停下来看江、看田', '清晨与黄昏光线最好，车也最少'],
    tips: '请靠右骑行并注意农用车辆；夏季注意防晒与补水，沿线补给点较少。'
  },
  {
    id: 'gudongminsu', name: '古东村民宿', cat: 'leisure', img: IMG.gudongminsu,
    rating: 4.3, level: '乡村民宿', price: 160, priceText: '¥160–380 / 晚',
    hours: '全天（入住 14:00 后）', district: '古东村', months: [5, 6, 7, 8, 9, 10],
    tags: ['住宿', '避暑', '乡村'],
    intro: '古东村依托瀑布景区发展起一批乡村民宿，院落宽敞、离水近，夏天比市区凉快好几度。住一晚，第二天赶在团队游客之前进景区，体验差别很大。',
    highlights: ['清晨步行即可到景区，避开人流高峰', '院里有果树和菜地，孩子可以撒开跑', '房东多为本地人，能问到最实在的玩法'],
    tips: '旺季与周末请提前预订；山区夜间较凉，夏季也建议带薄外套。'
  },
  {
    id: 'jiangpanluying', name: '江畔露营与垂钓', cat: 'leisure', img: IMG.jiangpanluying,
    rating: 4.0, level: '近郊户外', price: 0, priceText: '免费野地 / 营地 ¥50–120',
    hours: '全天（请勿夜间单独行动）', district: '东岸村', months: [4, 5, 6, 9, 10],
    tags: ['露营', '垂钓', '日落'],
    intro: '大圩沿江的滩地与竹林边，是本地人钓鱼、放风筝、看日落的地方。近年也有经营性的江畔营地，提供天幕、桌椅与烧烤位。',
    highlights: ['开阔江面与峰林背景，日落时分极美', '可以钓鱼，也能只是坐着发呆', '离古镇不远，补给方便'],
    tips: '汛期严禁在滩地露营，务必关注水位预警；离开时请把垃圾全部带走。'
  }
];

const ROUTES = [
  {
    id: 'r1', name: '古镇慢游一日线', days: 1, tag: '首次来大圩必选', color: '#c96a4a',
    desc: '用一天把老街、古桥、码头与会馆走透，中间穿插一碗米粉和一顿河鲜。',
    plan: [
      { day: 1, title: '上午 · 老街与会馆', spots: ['oldstreet', 'guildhall'], note: '清晨人少，先逛老街再进会馆，约 2 小时。' },
      { day: 1, title: '中午 · 一碗米粉', spots: ['mifen'], note: '老街口的米粉店，11 点前不用排队。' },
      { day: 1, title: '下午 · 桥与码头', spots: ['wanshouqiao', 'wharf'], note: '万寿桥与古码头相连，傍晚光线最好。' },
      { day: 1, title: '夜晚 · 江边味道', spots: ['pijiuyu', 'yuhuo'], note: '啤酒鱼之后可安排渔火夜游，需提前预约。' }
    ]
  },
  {
    id: 'r2', name: '山水两日线', days: 2, tag: '玩水 + 探洞', color: '#2fa37c',
    desc: '第一天爬瀑布、探溶洞，第二天上岛、坐船，把漓江的两种打开方式都试一遍。',
    plan: [
      { day: 1, title: 'Day1 · 走瀑戏浪', spots: ['gudong', 'gudongminsu'], note: '上午攀瀑、下午森林步道，晚上住古东村。' },
      { day: 2, title: 'Day2 · 冠岩与漓江', spots: ['guanyan', 'maozhoudao'], note: '上午探洞，下午渡船上岛吃河鲜，注意渡船班次。' }
    ]
  },
  {
    id: 'r3', name: '家乡深度三日线', days: 3, tag: '同学/亲友来访', color: '#5b8def',
    desc: '古镇、山水、民俗、美食全覆盖，适合带第一次来的朋友慢慢走。',
    plan: [
      { day: 1, title: 'Day1 · 读懂古镇', spots: ['oldstreet', 'wanshouqiao', 'wharf', 'xiongcun'], note: '熊村在镇郊，可打车或包车，安排半天。' },
      { day: 2, title: 'Day2 · 漓江两种玩法', spots: ['mopanshan', 'gudong'], note: '上午游船（约 4 小时），下午古东村玩水。' },
      { day: 3, title: 'Day3 · 民俗与味道', spots: ['ganxu', 'zhubian', 'youcha'], note: '赶圩要赶早，做完竹编下午喝油茶收尾。' }
    ]
  },
  {
    id: 'r4', name: '亲子田园线', days: 2, tag: '冬春限定', color: '#f2a03d',
    desc: '冬天摘草莓、夏天玩水，配上轻松的骑行与手作，全程节奏很慢。',
    plan: [
      { day: 1, title: 'Day1 · 田园与手作', spots: ['caomei', 'lvdao', 'zhubian'], note: '上午采摘、午后骑行，傍晚做竹编。' },
      { day: 2, title: 'Day2 · 江岛慢生活', spots: ['maozhoudao', 'zhutongfan'], note: '渡船上岛，午饭吃竹筒饭与河鲜，注意返程班次。' }
    ]
  }
];

/* ---------------- 影音中心 ----------------
 * src 指向真实的 MP4 文件（已放在 assets/video/）；
 * 若文件缺失，播放器会自动切换为图文轮播宣传片。
 */
const VIDEOS = [
  {
    id: 'v1', title: '《漓江第一古镇》宣传片', duration: '05:07',
    src: 'assets/video/daxu-promo.mp4', poster: IMG.hero,
    desc: '航拍漓江与古镇全貌，从青石板老街到圩日烟火，五分钟看完大圩的一天。',
    scenes: [
      { img: IMG.hero, cap: '漓江绕过大圩，峰林一座接一座' },
      { img: IMG.oldstreet, cap: '清晨六点，青石板街还带着昨夜的水汽' },
      { img: IMG.mopanshan, cap: '从磨盘山码头出发，走进漓江最精华的一段' },
      { img: IMG.gudong, cap: '古东瀑布，是国内少有的"可以爬的瀑布"' },
      { img: IMG.ganxu, cap: '圩日一早，老街就热闹起来了' }
    ]
  },
  {
    id: 'v2', title: '走瀑戏浪：古东瀑布攀爬全记录', duration: '01:41',
    src: 'assets/video/gudong-pubu.mp4', poster: IMG.gudong,
    desc: '穿草鞋、戴头盔，跟着镜头一级一级往上爬，看瀑布最真实的样子。',
    scenes: [
      { img: IMG.gudong, cap: '第一级最难，水流打在头盔上很响' },
      { img: IMG.mopanshan, cap: '爬到顶后回望，江水就在脚下拐了个弯' },
      { img: IMG.oldstreet, cap: '下山回到古镇，正好赶上午市' }
    ]
  },
  {
    id: 'v3', title: '冠岩探洞：地下河与观光小火车', duration: '00:55',
    src: 'assets/video/guanyan.mp4', poster: IMG.guanyan,
    desc: '坐小火车进洞，换乘小船走地下暗河，钟乳石在灯光下像另一座城市。',
    scenes: [
      { img: IMG.guanyan, cap: '小火车钻进溶洞，灯光一段一段亮起来' },
      { img: IMG.mopanshan, cap: '出洞就能看到漓江，水陆两种风景无缝切换' }
    ]
  },
  {
    id: 'v4', title: '大圩味道：米粉、啤酒鱼与油茶', duration: '00:14',
    src: 'assets/video/daxu-food.mp4', poster: IMG.mifen,
    desc: '从清晨第一碗米粉到夜里的一锅啤酒鱼，跟着镜头吃懂这座小镇。',
    scenes: [
      { img: IMG.mifen, cap: '六点半，米粉店门口已经排起队' },
      { img: IMG.pijiuyu, cap: '啤酒鱼要现杀现焖，汤汁拌饭最好吃' },
      { img: IMG.youcha, cap: '一碗油茶配艾叶粑，是本地人的下午' }
    ]
  }
];

const TIPS = [
  { icon: '🚗', title: '交通', text: '大圩镇距桂林市区约 20 公里、距灵川县城约 15 公里，自驾 30 分钟左右；市区有班车与公交可达，古镇内步行即可，去古东村、冠岩建议包车或打车。' },
  { icon: '🎫', title: '票务', text: '古东瀑布、冠岩为售票景区，漓江游船需提前 1—2 天订票并确认码头；古镇老街、万寿桥、古码头均免费开放。' },
  { icon: '🌤️', title: '季节', text: '4—10 月为最适合出行的月份：夏季玩水、秋季天高气爽，冬季（12—4 月）则是草莓采摘季；汛期请关注水位与景区临时关闭公告。' },
  { icon: '📅', title: '圩日', text: '想看最地道的本地生活就赶圩日去（当地圩期以现场公告为准），圩日清晨最热闹、停车最困难，建议步行或早到。' },
  { icon: '🍜', title: '吃饭', text: '米粉店多做早午市，想吃要赶早；河鲜按斤计价，点单前先确认价格；油茶偏咸微苦，第一次可以让店家少放姜。' },
  { icon: '⚠️', title: '安全', text: '攀瀑、渡船与夜游务必选择有资质的经营方并穿好救生装备；汛期严禁在江滩露营；老街与村落是居民生活区，拍摄请先征得同意。' }
];
