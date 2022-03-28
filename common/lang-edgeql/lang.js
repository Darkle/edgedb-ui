// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
import {strPrefix, dollarStr, operatorHacks, bigNumber, specializeIdent} from "./tokens.js"
import {NodeProp} from "@lezer/common"
const spec_operator = {__proto__:null,"<":129}
const spec_shortName = {__proto__:null,array:132, tuple:136}
export const parser = LRParser.deserialize({
  version: 13,
  states: ".dOYQgOOO!jQgO'#CeO$^Q`O'#DcOOQV'#Ce'#CeOOQV'#Cg'#CgOOQV'#Ch'#ChO$iOpO'#CiO$wOpO'#CiO%VO`O'#CiOOQV'#Ci'#CiO%_O`O'#CkO%gQoO'#CmOOQO'#Cq'#CqOOQO'#Cr'#CrOOQV'#Cp'#CpO'ZQ`O'#CsO'`QgO'#CxO'gQgO'#C{O'qQgO'#C|OOQV'#Da'#DaOOQV'#C}'#C}O'xQgO'#CdQ(SQ`OOO(XQ`O'#DqO(^Q`O'#DoO(tQ`O'#CoOOQO,59Q,59QOOQV,59},59}OOOO'#DO'#DOO({OpO,59TOOQV,59T,59TOOOO'#DP'#DPO)ZOpO,59TO)iO!bO,59TO)wO!bO,59TO*VO#tO,59VO*hO#tO,59VOOQV,59X,59XOOQV,59_,59_OOQV,59d,59dO*yQgO,59dOOQV'#DV'#DVO+QQgO,59gOOQV,59g,59gOOQV,59h,59hO+[QgO,59hOOQV-E6{-E6{OOQV'#DX'#DXO+cQgO'#DWQ(SQ`OOO+jQ`O,5:]O+xQ`O,5:ZO,TQ&jO'#CeO,`Q&jO,59`O,hQ&jO,59ZO,mQ&jO,59ZO,rQ`O,59`OOOO-E6|-E6|OOQV1G.o1G.oOOOO-E6}-E6}OOOO'#DQ'#DQO,}O!bO1G.oOOOO'#DR'#DRO-]O!bO1G.oOOOO'#DS'#DSO-kO#tO1G.qOOQV1G.q1G.qOOOO'#DT'#DTO-|O#tO1G.qOOQV1G/O1G/OOOQV-E7T-E7TOOQV1G/R1G/ROOQV1G/S1G/SOOQV-E7V-E7VOOQO,59r,59rOOQO-E7U-E7UO._Q&jO'#CeO.mQ&jO'#DsO.uQ&jO1G/wO.zQ&jO1G/uOOQO1G.z1G.zO/PQgO1G.uOOQV1G.u1G.uO0sQ&jO1G.zOOOO-E7O-E7OOOQV7+$Z7+$ZOOOO-E7P-E7POOOO-E7Q-E7QOOQV7+$]7+$]OOOO-E7R-E7RO0xQ`O,5:_O1WQ`O'#DUO1fQ&jO,5:_OOQV7+%c7+%cOOQV7+%a7+%aOOQO7+$f7+$fO1nQ&jO1G/yO1vQ&jO,59pOOQO,59p,59pOOQO-E7S-E7SO2UQ&jO7+%eO0xQ`O1G/[OOQO7+$v7+$v",
  stateData: "2^~O!SOSUOS~OPWOQYOSROTcObcOk`OnaO}XO!OTO!PSO!QSO!UPO!XTO!YUO![VO!`ZO!biO!d[O!f]O!lbO~O!WjOPXXQXXSXXTXXbXXkXXnXX|XX}XX!OXX!PXX!QXX!UXX!XXX!YXX![XX!`XX!bXX!dXX!fXX!jXX!lXXjXXmXX!kXX~OSkO!QkO!UkO~O^lO!YnO!ZlO![lO~O^oO!YoO!ZoO![nO~O!YqO![rO~O!YsO![tO~ORuOPaXQaXSaXTaXbaXkaXnaX|aX}aX!OaX!PaX!QaX!UaX!XaX!YaX![aX!`aX!baX!daX!faX!jaX!laXjaXmaX!kaX~OivO~OjwO~PYOm{O!jyO~PYO!k|O~PYO|WX!jWX~PYO!j!PO~O!b!SO~O!b!TO~OSRO!PSO!QSO!d[O!f]O~O!U!UO~P(cO^lO!Y![O!ZlO![lO~O^oO!YoO!ZoO![![O~O!Y![O!Z!^O![!^O!]!^O~O!Y!`O!Z!`O![![O!]!`O~O`!bO!Y!dO![!bO!^!bO!_!bO~O`!eO!Y!eO![!dO!^!eO!_!eO~Oj!gO~PYOm!iO!jyO~PYO!k!jO~PYO!j!PO~PYOSRO!U!nO!d[O!f]O~OSRO!U!UO!f]O~O!WjO!aXX!iXX~O!a!rO!adX~O!a!sO~O!a!tO~OSRO!U!UO!d[O~O!Y!wO!Z!^O![!^O!]!^O~O!Y!`O!Z!`O![!wO!]!`O~O`!bO!Y!zO![!bO!^!bO!_!bO~O`!eO!Y!eO![!zO!^!eO!_!eO~O!WjO!h!|O!aXX!iXX~O!i!}O!a!gX~O!a#PO~O!a#QO~OPciQciSciTcibciihikcinci|ci}ci!Oci!Pci!Qci!Uci!Xci!Yci![ci!`ci!bci!dci!fci!jci!lcijcimci!kci~O!a#RO~OSRO!U!UO!d[O!f]O~OSRO!U#TO!d[O!f]O~O!i!}O!a!ga~O!i!}O!a!gi~O!WjO!h#XO!aXX!iXX~O!i!}O!a!gq~O",
  goto: ")X!hPPPPPPPP!i!o#a#s$R$RP$RP$RP$R$^$x%Z$R%lPPP$RPP$R$R%w&W&^&d&j&p&v&|'W'^'dPPPPPPP'kP'xPPPPPPPPPPP([P(qP)UQfOR!l!QbcO`abexz}!QQ!WiQ!o!SQ!q!TQ!u!YQ#S!|Q#U!}R#Y#XqQO`abeixz}!Q!S!T!Y!|!}#XbcO`abexz}!QR!YiccO`abexz}!QbcO`abexz}!QQ!XiQ!o!SQ#S!|Q#U!}R#Y#XohO`abeixz}!Q!S!Y!|!}#XogO`abeixz}!Q!S!T!|!}#Xc_O`abexz}!QSeO!QQx`Q}bV!Oex}QmUR!ZmQpVR!]pQ!_qR!v!_Q!arR!x!aQ!csR!y!cQ!ftR!{!fQ#O!oS#V#O#WR#W#SQzaR!hzQ!RfR!m!RS!Qf!RR!k!Q^dO`bex}!QTyazqRO`abeixz}!Q!S!T!Y!|!}#Xj^O`abexz}!Q!S!|!}#XQ!ViR!u!Yl^O`abeixz}!Q!S!|!}#XR!q!TR!p!S",
  nodeNames: "⚠ RawStringPrefix ByteStringPrefix BigNumberPostfix BuiltinName Bool Comment Script Statement Name ModuleName Keyword Operator String StringEscape ByteString ByteEscape Number Punctuation Cast CompoundTypeName BuiltinName BuiltinName QueryParameter Cast QueryParameterName ) ( Parens } { Braces Brackets",
  maxTerm: 74,
  nodeProps: [
    [NodeProp.openedBy, 26,"(",29,"{"],
    [NodeProp.closedBy, 27,")",30,"}"]
  ],
  skippedNodes: [0,6],
  repeatNodeCount: 11,
  tokenData: "3q~R|OX#{XY$QYZ$XZ]#{]^$Q^p#{pq$bqr$krs$zst%Ptu%kuv'^vw'gwx'nxy'syz'|z{'^{|(V|}(c}!O(n!O!P(}!P!Q)Z!Q!R)g!R![*y![!]+q!]!^,X!^!_,b!_!`'^!`!a,n!a!b,|!b!c-d!c!}-m!}#O.e#O#P.n#P#Q2c#Q#R'^#R#S-m#S#T2l#T#o-m#o#p3_#p#q'g#q#r3h#r#s'g#s~#{U$QO!ZUg$XO!ZU!Sao$bO!_W!ZU!Sao$kO!^W!ZU!Sa_$rP!^W!ZU!_!`$uP$zO!XP~%PO!Y~o%YQUa!^W!ZUOY%`Z~%`a%eQUaOY%`Z~%`_%rU!^W!ZU!Q!R&U!R![&Z!c!}&c#R#S&c#S#T&t#T#o&cP&ZOiPP&`PiP!Q![&ZP&hSiP!Q![&c!c!}&c#R#S&c#T#o&cP&wRO!b'Q!c#S'Q#T~'QP'TRO#S'Q#S#T&U#T~'Q_'gO!^W!XP!ZU^'nO!^W!ZU~'sO![~_'|OkP!^W!ZU_(VOjP!^W!ZU_(`P!^W!XP!ZU{|$uo(nO!i`bP!^W!ZU_(uP!^W!ZU!`!a(xP(}ObP_)WPbP!^W!ZU!^!_(x_)dP!^W!XP!ZU!P!Q$u_)pR!^W!`P!ZU!O!P)y!g!h*_#X#Y*_P)|P!Q![*PP*UR!`P!Q![*P!g!h*_#X#Y*_P*bR{|*k}!O*k!Q![*qP*nP!Q![*qP*vP!`P!Q![*q_+SS!^W!`P!ZU!O!P)y!Q![+`!g!h*_#X#Y*_P+eS!`P!O!P)y!Q![+`!g!h*_#X#Y*_o+|Q!h`bP!^W!ZU![!],S!_!`$ua,XO!Wa_,bO!jP!^W!ZU_,kP!^W!XP!ZU!_!`$uo,yP!a`!^W!XP!ZU!_!`$u_-TR!^W!ZUqr-^!_!`$u!a!b$uP-aP!_!`$u_-mObP!^W!ZU_-vS!^W!UP!ZU!Q![.S!c!}.S#R#S.S#T#o.SP.XS!UP!Q![.S!c!}.S#R#S.S#T#o.S_.nO!lP!^W!ZU^.s[!]SYZ/irs/iwx/i!w!x/p#O#P/i#U#V/i#Y#Z/i#b#c/i#f#g/i#h#i/i#i#j0r#l#m1yY/pO`W^QQ/sR!Q![/|!c!i/|#T#Z/|Q0PR!Q![0Y!c!i0Y#T#Z0YQ0]R!Q![0f!c!i0f#T#Z0fQ0iR!Q![0r!c!i0r#T#Z0rQ0uR!Q![1O!c!i1O#T#Z1OQ1RR!Q![1[!c!i1[#T#Z1[Q1_R!Q![1h!c!i1h#T#Z1hQ1kR!Q![1t!c!i1t#T#Z1tQ1yO^QY1|R!Q![2V!c!i2V#T#Z2VY2YR!Q![/i!c!i/i#T#Z/i_2lO!kP!^W!ZU_2sR!^W!ZUO!b2|!c#S2|#T~2|P3PRO#S2|#S#T3Y#T~2|P3_O!UP_3hOnP!^W!ZU_3qOmP!^W!ZU",
  tokenizers: [strPrefix, dollarStr, operatorHacks, bigNumber, 0, 1, 2, 3, 4],
  topRules: {"Script":[0,7]},
  dynamicPrecedences: {"23":1},
  specialized: [{term: 52, get: (value, stack) => (specializeIdent(value, stack) << 1)},{term: 55, get: value => spec_operator[value] || -1},{term: 52, get: value => spec_shortName[value] || -1}],
  tokenPrec: 0
})
