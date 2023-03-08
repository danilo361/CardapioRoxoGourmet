	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingPicture="files/mobile-ext/loadingPicture.png";bookConfig.loadingBackground="#800080";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#110e0f";bookConfig.iconColor="#E5E5E5";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#b7b7b7";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#9D9989";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [];bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Hide";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="Hide";bookConfig.bgBeginColor="#6b5e53";bookConfig.bgEndColor="#6b5e53";bookConfig.bgMRotation="-90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#905894";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=23;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=3948;;bookConfig.securityType="1";bookConfig.CreatedTime ="201022130128";bookConfig.bookTitle="Cardápio Roxo Gourmet";bookConfig.bookmarkCR="6bceccb36ca4722cd7b2f2b712100ba7b819bafa";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Portuguese",btnFirstPage:"Primeira página",btnNextPage:"Página seguinte",btnLastPage:"Última página",btnPrePage:"Página anterior",btnDownload:"Transferir",btnPrint:"Imprimir",btnSearch:"Buscar",btnClearSearch:"Limpar",frmSearchPrompt:"Clear",btnBookMark:"Índice",btnHelp:"Ajuda",btnHome:"Home",btnFullScreen:"Ativar tela cheia",btnDisableFullScreen:"Desativar tela cheia",btnSoundOn:"Som ligado",btnSoundOff:"Som desligado",btnShareEmail:"Compartilhar",btnSocialShare:"Compartilhar",btnZoomIn:"Ampliar",btnZoomOut:"Reduzir",btnDragToMove:"Mover ao arrastar o mouse",btnAutoFlip:"Virar automaticamente",btnStopAutoFlip:"Parar de virar automaticamente",btnGoToHome:"Voltar ao começo",frmHelpCaption:"Ajuda",frmHelpTip1:"Duplo clique para ampliar ou reduzir",frmHelpTip2:"Arrastar o canto da página para visualizar",frmPrintCaption:"Imprimir",frmPrintBtnCaption:"Imprimir",frmPrintPrintAll:"Imprimir todas as páginas",frmPrintPrintCurrentPage:"Imprimir página atual",frmPrintPrintRange:"Intervalo de páginas",frmPrintExampleCaption:"Ex.: 2,5,8-26",frmPrintPreparePage:"Preparando páginas:",frmPrintPrintFailed:"Erro ao Imprimir:",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",loginCaption:"Iniciar sessão",loginInvalidPassword:"Senha incorreta",loginPasswordLabel:"Senha:",loginBtnLogin:"Ingressar",loginBtnCancel:"Cancelar",btnThumb:"Miniaturas",lblPages:"Páginas:",lblPagesFound:"Páginas:",lblPageIndex:"Página",btnAbout:"Sobre",frnAboutCaption:"Sobre e contato",btnSinglePage:"Página simples",btnDoublePage:"Página dupla",btnSwicthLanguage:"Alterar idioma",tipChangeLanguage:"Selecione um idioma abaixo...",btnMoreOptionsLeft:"Mais opções",btnMoreOptionsRight:"Mais opções",btnFit:"Ajustar à janela",smallModeCaption:"Clique para visualizar em tela cheia",btnAddAnnotation:"Adicionar anotações",btnAnnotation:"Anotações",FlipPageEditor_SaveAndExit:"Salvar e sair",FlipPageEditor_Exit:"Sair",DrawToolWindow_Redo:"Refazer",DrawToolWindow_Undo:"Desfazer",DrawToolWindow_Clear:"Limpar",DrawToolWindow_Brush:"Pincel",DrawToolWindow_Width:"Largura",DrawToolWindow_Alpha:"Alfa",DrawToolWindow_Color:"Cor",DrawToolWindow_Eraser:"Borracha",DrawToolWindow_Rectangular:"Retângulo",DrawToolWindow_Ellipse:"Elipse",TStuff_BorderWidth:"Largura da borda",TStuff_BorderAlph:"Transparência da borda",TStuff_BorderColor:"Cor da borda",DrawToolWindow_TextNote:"Nota de texto",AnnotMark:"Marcador de livro",lastpagebtnHelp:"Última página",firstpagebtnHelp:"Primeira página",homebtnHelp:"Retornar à página inicial",aboubtnHelp:"Sobre",screenbtnHelp:"Abrir este aplicativo no modo de tela cheia",helpbtnHelp:"Mostrar Ajuda",searchbtnHelp:"Busca de páginas",pagesbtnHelp:"Dê uma olhada na miniatura deste livreto",bookmarkbtnHelp:"Abrir marcador",AnnotmarkbtnHelp:"Abrir índice",printbtnHelp:"Imprimir o livreto",soundbtnHelp:"Ligar ou desligar o som",sharebtnHelp:"Enviar por e-mail",socialSharebtnHelp:"Compartilhar",zoominbtnHelp:"Ampliar",downloadbtnHelp:"Transferir este livreto",pagemodlebtnHelp:"Alternar modo de página simples e dupla",languagebtnHelp:"Aternar idioma",annotationbtnHelp:"Adicionar anotação",addbookmarkbtnHelp:"Adicionar marcador",removebookmarkbtnHelp:"Remover marcador",updatebookmarkbtnHelp:"Atualizar marcador",btnShoppingCart:"Carrinho de compra",Help_ShoppingCartbtn:"Carrinho de compra",Help_btnNextPage:"Página seguinte",Help_btnPrePage:"Página anterior",Help_btnAutoFlip:"Virar automaticamente",Help_StopAutoFlip:"Parar de virar automaticamente",btnaddbookmark:"Adicionar",btndeletebookmark:"Apagar",btnupdatebookmark:"Atualizar",frmyourbookmarks:"Seus marcadores",frmitems:"itens",DownloadFullPublication:"Publicação completa",DownloadCurrentPage:"Página atual",DownloadAttachedFiles:"Arquivos anexos",lblLink:"Etiqueta do link para compartilhar",btnCopy:"Botão copiar",infCopyToClipboard:"Your browser does not support clipboard.",restorePage:"Você gostaria de restaurar a sessão anterior?",tmpl_Backgoundsoundon:"Ativar som de fundo",tmpl_Backgoundsoundoff:"Desativar som de fundo",tmpl_Flipsoundon:"Ativar som ao virar",tmpl_Flipsoundoff:"Desativar som ao virar",Help_PageIndex:"Número de página atual",tmpl_PrintPageRanges:"INTERVALOS DE PÁGINA",tmpl_PrintPreview:"VISUALIZAÇÃO",btnSelection:"Selecionar texto",loginNameLabel:"Nome:",btnGotoPage:"Ir",btnSettings:"Configurações",soundSettingTitle:"Configurar som",closeFlipSound:"Fechar som ao virar",closeBackgroundSound:"Fechar som de fundo",frmShareCaption:"Compartilhar",frmShareLinkLabel:"ligação:",frmShareBtnCopy:"Copiar",frmShareItemsGroupCaption:"Compartilhar na rede social",frmPanelTitle:"Share it",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"Ir para página",btnPageBack:"Anterior",btnPageForward:"Seguinte",SelectTextCopy:"Copiar texto",selectCopyButton:"Copiar",TStuffCart_TypeCart:"Carrinho de compras",TStuffCart_DetailedQuantity:"Quantidade",TStuffCart_DetailedPrice:"Preço",ShappingCart_Close:"Fechar",ShappingCart_CheckOut:"Verificar",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Adicionar ao carrinho",ShappingCart_InStock:"Em estoque",TStuffCart_DetailedCost:"Custo de frete",TStuffCart_DetailedTime:"Tempo de entrega",TStuffCart_DetailedDay:"dia(s)",ShappingCart_NotStock:"Não o suficiente em estoque",btnCrop:"Cortar",btnDragButton:"Arrastar",btnFlipBook:"Virar livro",btnSlideMode:"Modo deslizante",btnSinglePageMode:"Modo de página simples",btnVertical:"Modo vertical",btnHotizontal:"Modo horizontal",btnClose:"Fechar",btnDoublePage:"Página dupla",btnBookStatus:"Visualizar livro",checkBoxInsert:"Inserir página atual",lblLast:"Esta é a última página.",lblFirst:"Esta é a primeira página.",lblFullscreen:"Clique para visualizar em tela cheia",lblName:"Nome",lblPassword:"Senha",lblLogin:"Ingressar",lblCancel:"Cancelar",lblNoName:"O nome do usuário não pode estar vazio.",lblNoPassword:"A senha não pode estar vazia.",lblNoCorrectLogin:"Digite corretamente o nome de usuário e senha.",btnVideo:"Galeria de vídeos",btnSlideShow:"Apresentação",pnlSearchInputInvalid:"O texto de busca é muito pequeno.",btnDragToMove:"Mover ao arrastar o mouse",btnPositionToMove:"Mover ao posicionar o mouse",lblHelp1:"Arraste o canto da página para visualizar",lblHelp2:"Duplo clique para ampliar ou reduzir",lblCopy:"Copiar",lblAddToPage:"adicionar à página",lblPage:"Página",lblTitle:"Título",lblEdit:"Editar",lblDelete:"Apagar",lblRemoveAll:"Remover tudo",tltCursor:"cursor",tltAddHighlight:"adicionar realce",tltAddTexts:"adicionar textos",tltAddShapes:"adicionar formas",tltAddNotes:"adicionar notas",tltAddImageFile:"adicionar arquivo de imagem",tltAddSignature:"adicionar assinatura",tltAddLine:"adicionar linha",tltAddArrow:"adicionar seta",tltAddRect:"adicionar retângulo",tltAddEllipse:"adicionar círculo",lblDoubleClickToZoomIn:"Duplo clique para ampliar.",frmShareCaption:"Compartilhar",frmShareLabel:"Compartilhar",frmShareInfo:"Você pode facilmente compartilhar esta publicação nas redes sociais. Basta clicar no botão apropriado abaixo.",frminsertLabel:"Inserir para o site",frminsertInfo:"Use o código abaixo para incorporar esta publicação para o seu site.",btnQRCode:"Clique para ler o código QR",btnRotateLeft:"Vire à esquerda",btnRotateRight:"Vire à direita",lblSelectMode:"Select view mode please.",frmDownloadPreview:"Preview",frmHowToUse:"How To Use",lblHelpPage1:"Move your finger to flip the book page.",lblHelpPage2:"Zoom in by using gesture or double click on the page.",lblHelpPage3:"Click on the logo to reach the official website of the company.",lblHelpPage4:"Add bookmarks, use search function and auto flip the book.",lblHelpPage5:"Switch horizontal and vertical view on mobile devices.",TTActionQuiz_PlayAgain:"Do you wanna play it again",TTActionQuiz_Ration:"Your ratio is",frmTelephone:"Telephone list",btnDialing:"Dialing",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"Select Text",btnNote:"Annotation",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat Share",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"Sorry, you can't print the pages.",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",frmBookMark:"marcador de livros",btnFullscreen:"Ecrã Inteiro",btnExitFullscreen:"Sair da tela inteira",btnMore:"Mais",frmPrintall:"Imprimir todas as páginas",frmPrintcurrent:"Imprimir página atual",frmPrintRange:"Intervalo de impressão",frmPrintexample:"Exemplo: 2,3,5-10",frmPrintbtn:"impressão",frmaboutcaption:"contato",frmaboutcontactinformation:"Informações para contato",frmaboutADDRESS:"ENDEREÇO",frmaboutEMAIL:"EMAIL",frmaboutWEBSITE:"WEBSITE",frmaboutMOBILE:"MOBILE",frmaboutAUTHOR:"AUTOR",frmaboutDESCRIPTION:"DESCRIÇÃO",frmSearch:"Pesquisa",frmToc:"Tabela de Conteúdo",btnTableOfContent:"Mostrar tabela de conteúdo",lblDescription:"Título",frmLinkLabel:"Ligação",frmQrcodeCaption:"Digitalize o código bidimensional inferior para visualizar com o telemóvel."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx     I'm going to buy below product(s):      ${shopping}  Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2020221256152133","alpha":"1","mouseOverEffect":"0","borderColor":"11899463","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.8539730426743225","y":"0.9407379467950568","width":"0.11143010072502554","height":"0.061791395797741344","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"901.42"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"None","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"900","imgOriginalHeight":"1053","url":"./files/pageConfig/mao.png","originalURL":"./files/pageConfig/mao.png","effect":{"effectType":"com.mobiano.flipbook.pageeditor.effect::TFlyEffect","triggerAction":"Fly","duration":"1","position":"right"}},{"annotype":"com.mobiano.flipbook.pageeditor.textAnim::TAnnoTextAnim","annoId":"2020221256159153","alpha":"1","effectType":"Right To Left","location":{"tannoName":"text1","x":"0.7250255462021313","y":"0.9052384016329791","width":"0.2987689163544353","height":"0.07976304053604315","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"901.42"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#3C2A11\" LETTERSPACING=\"0\" KERNING=\"0\"><B>&lt;&lt;&lt; </B><FONT FACE=\"Arial Black\"><B>Deslize</B></FONT></FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#3C2A11\" LETTERSPACING=\"0\" KERNING=\"0\"><B>&lt;&lt;&lt; </B><FONT FACE=\"Arial Black\"><B>Deslize</B></FONT></FONT></P></TEXTFORMAT>","pageH":"901.42","pageW":"411.02"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoDynamicText","annoId":"2020221256159881","alpha":"1","HRate":"0.045696999999999995","location":{"tannoName":"text2","x":"0.2530290496812807","y":"0.8608639701803821","width":"0.48659432631015526","height":"0.13090457278516118","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"411.02","pageHeight":"901.42"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","strText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Alef\" SIZE=\"28\" COLOR=\"#2E1F08\" LETTERSPACING=\"0\" KERNING=\"0\"><B>Seja</B></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Alef\" SIZE=\"28\" COLOR=\"#2E1F08\" LETTERSPACING=\"0\" KERNING=\"0\"><B>Bem Vindo</B></FONT></P></TEXTFORMAT>","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Alef\" SIZE=\"28\" COLOR=\"#2E1F08\" LETTERSPACING=\"0\" KERNING=\"0\"><B>Seja</B></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Alef\" SIZE=\"28\" COLOR=\"#2E1F08\" LETTERSPACING=\"0\" KERNING=\"0\"><B>Bem Vindo</B></FONT></P></TEXTFORMAT>","format":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Alef\" SIZE=\"28\" COLOR=\"#2E1F08\" LETTERSPACING=\"0\" KERNING=\"0\"><B>Seja</B></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Alef\" SIZE=\"28\" COLOR=\"#2E1F08\" LETTERSPACING=\"0\" KERNING=\"0\"><B>Bem Vindo</B></FONT></P></TEXTFORMAT>","pageH":"901.42","pageW":"411.02","font":"Tahoma","size":"12","color":"0","bold":"false","italic":"false","align":"left"},"repeat":"true","moveSpeed":"3.1"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"},{pageColor:"16777215",pageIsStrech:"no"}];
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}