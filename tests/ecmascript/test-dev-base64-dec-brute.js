/*
 *  Brute force base64 decode test, try to cover all code paths and all
 *  lookup table indices.
 */

/*@include util-checksum-string.js@*/

/*===
concatenate
358810080
whitespace and mutate test
0 0 0
1 4 21269651
2 4 21270301
3 4 21274071
4 4 21274721
5 4 21272251
6 4 21272901
7 4 21276671
8 4 21277321
9 4 21281091
10 4 21281741
11 4 21298381
12 4 21299031
13 4 21302801
14 4 21303451
15 4 21307221
16 4 21307871
17 4 21270041
18 4 21270691
19 4 21274461
20 4 21275111
21 4 21272641
22 4 21273291
23 4 21277061
24 4 21277711
25 4 21281481
26 4 21282131
27 4 21298771
28 4 21299421
29 4 21303191
30 4 21303841
31 4 21307611
32 4 21308261
33 4 21270431
34 4 21271081
35 4 21274851
36 4 21275501
37 4 21273031
38 4 21273681
39 4 21277451
40 4 21278101
41 4 21281871
42 4 21282521
43 4 21299161
44 4 21299811
45 4 21303581
46 4 21304231
47 4 21308001
48 4 21308651
49 4 21270821
50 4 21271471
51 4 21275241
52 4 21275891
53 4 21273421
54 4 21274071
55 4 21277841
56 4 21278491
57 4 21282261
58 4 21282911
59 4 21299551
60 4 21300201
61 4 21303971
62 4 21304621
63 4 21308391
64 4 21309041
65 4 21271211
66 4 21271861
67 4 21275631
68 4 21276281
69 4 21273811
70 4 21274461
71 4 21278231
72 4 21278881
73 4 21282651
74 4 21283301
75 4 21299941
76 4 21300591
77 4 21304361
78 4 21305011
79 4 21308781
80 4 21309431
81 4 21271601
82 4 21272251
83 4 21276021
84 4 21276671
85 4 21274201
86 4 21274851
87 4 21278621
88 4 21279271
89 4 21283041
90 4 21283691
91 4 21300331
92 4 21300981
93 4 21304751
94 4 21305401
95 4 21309171
96 4 21309821
97 4 21271991
98 4 21272641
99 4 21276411
100 4 21277061
101 4 21274591
102 4 21275241
103 4 21279011
104 4 21279661
105 4 21283431
106 4 21284081
107 4 21300721
108 4 21301371
109 4 21305141
110 4 21305791
111 4 21309561
112 4 21310211
113 4 21272381
114 4 21273031
115 4 21276801
116 4 21277451
117 4 21274981
118 4 21275631
119 4 21279401
120 4 21280051
121 4 21283821
122 4 21284471
123 4 21301111
124 4 21301761
125 4 21305531
126 4 21306181
127 4 21309951
128 4 21310601
129 4 21272771
130 4 21273421
131 4 21277191
132 4 21277841
133 4 21275371
134 4 21276021
135 4 21279791
136 4 21280441
137 4 21284211
138 4 21284861
139 4 21301501
140 4 21302151
141 4 21305921
142 4 21306571
143 4 21310341
144 4 21310991
145 4 21273161
146 4 21273811
147 4 21277581
148 4 21278231
149 4 21275761
150 4 21276411
151 4 21280181
152 4 21280831
153 4 21284601
154 4 21285251
155 4 21301891
156 4 21302541
157 4 21306311
158 4 21306961
159 4 21310731
160 4 21311381
161 4 21288761
162 4 21289411
163 4 21293181
164 4 21293831
165 4 21291361
166 4 21292011
167 4 21295781
168 4 21296431
169 4 21300201
170 4 21300851
171 4 21317491
172 4 21318141
173 4 21321911
174 4 21322561
175 4 21326331
176 4 21326981
177 4 21289151
178 4 21289801
179 4 21293571
180 4 21294221
181 4 21291751
182 4 21292401
183 4 21296171
184 4 21296821
185 4 21300591
186 4 21301241
187 4 21317881
188 4 21318531
189 4 21322301
190 4 21322951
191 4 21326721
192 4 21327371
193 4 21289541
194 4 21290191
195 4 21293961
196 4 21294611
197 4 21292141
198 4 21292791
199 4 21296561
200 4 21297211
201 4 21300981
202 4 21301631
203 4 21318271
204 4 21318921
205 4 21322691
206 4 21323341
207 4 21327111
208 4 21327761
209 4 21289931
210 4 21290581
211 4 21294351
212 4 21295001
213 4 21292531
214 4 21293181
215 4 21296951
216 4 21297601
217 4 21301371
218 4 21302021
219 4 21318661
220 4 21319311
221 4 21323081
222 4 21323731
223 4 21327501
224 4 21328151
225 4 21290321
226 4 21290971
227 4 21294741
228 4 21295391
229 4 21292921
230 4 21293571
231 4 21297341
232 4 21297991
233 4 21301761
234 4 21302411
235 4 21319051
236 4 21319701
237 4 21323471
238 4 21324121
239 4 21327891
240 4 21328541
241 4 21290711
242 4 21291361
243 4 21295131
244 4 21295781
245 4 21293311
246 4 21293961
247 4 21297731
248 4 21298381
249 4 21302151
250 4 21302801
251 4 21319441
252 4 21320091
253 4 21323861
254 4 21324511
255 4 21328281
256 4 21328931
257 4 21279011
258 4 21284401
259 4 21925257
260 8 44170722
261 8 44313520
262 8 44934159
263 12 69967272
264 12 71621744
265 12 70844171
266 16 96682716
267 16 98590680
268 16 100929980
269 20 126662653
270 20 127946763
271 20 129602187
272 31 197833213
273 13 74985323
0 0 1984
1 4 27520
2 4 27620
3 4 27720
4 4 27820
5 4 27920
6 4 28020
7 4 28120
8 4 28220
9 4 28320
10 4 28420
11 4 32420
12 4 32520
13 4 32620
14 4 32720
15 4 32820
16 4 32920
17 4 27580
18 4 27680
19 4 27780
20 4 27880
21 4 27980
22 4 28080
23 4 28180
24 4 28280
25 4 28380
26 4 28480
27 4 32480
28 4 32580
29 4 32680
30 4 32780
31 4 32880
32 4 32980
33 4 27640
34 4 27740
35 4 27840
36 4 27940
37 4 28040
38 4 28140
39 4 28240
40 4 28340
41 4 28440
42 4 28540
43 4 32540
44 4 32640
45 4 32740
46 4 32840
47 4 32940
48 4 33040
49 4 27700
50 4 27800
51 4 27900
52 4 28000
53 4 28100
54 4 28200
55 4 28300
56 4 28400
57 4 28500
58 4 28600
59 4 32600
60 4 32700
61 4 32800
62 4 32900
63 4 33000
64 4 33100
65 4 27760
66 4 27860
67 4 27960
68 4 28060
69 4 28160
70 4 28260
71 4 28360
72 4 28460
73 4 28560
74 4 28660
75 4 32660
76 4 32760
77 4 32860
78 4 32960
79 4 33060
80 4 33160
81 4 27820
82 4 27920
83 4 28020
84 4 28120
85 4 28220
86 4 28320
87 4 28420
88 4 28520
89 4 28620
90 4 28720
91 4 32720
92 4 32820
93 4 32920
94 4 33020
95 4 33120
96 4 33220
97 4 27880
98 4 27980
99 4 28080
100 4 28180
101 4 28280
102 4 28380
103 4 28480
104 4 28580
105 4 28680
106 4 28780
107 4 32780
108 4 32880
109 4 32980
110 4 33080
111 4 33180
112 4 33280
113 4 27940
114 4 28040
115 4 28140
116 4 28240
117 4 28340
118 4 28440
119 4 28540
120 4 28640
121 4 28740
122 4 28840
123 4 32840
124 4 32940
125 4 33040
126 4 33140
127 4 33240
128 4 33340
129 4 28000
130 4 28100
131 4 28200
132 4 28300
133 4 28400
134 4 28500
135 4 28600
136 4 28700
137 4 28800
138 4 28900
139 4 32900
140 4 33000
141 4 33100
142 4 33200
143 4 33300
144 4 33400
145 4 28060
146 4 28160
147 4 28260
148 4 28360
149 4 28460
150 4 28560
151 4 28660
152 4 28760
153 4 28860
154 4 28960
155 4 32960
156 4 33060
157 4 33160
158 4 33260
159 4 33360
160 4 33460
161 4 30460
162 4 30560
163 4 30660
164 4 30760
165 4 30860
166 4 30960
167 4 31060
168 4 31160
169 4 31260
170 4 31360
171 4 35360
172 4 35460
173 4 35560
174 4 35660
175 4 35760
176 4 35860
177 4 30520
178 4 30620
179 4 30720
180 4 30820
181 4 30920
182 4 31020
183 4 31120
184 4 31220
185 4 31320
186 4 31420
187 4 35420
188 4 35520
189 4 35620
190 4 35720
191 4 35820
192 4 35920
193 4 30580
194 4 30680
195 4 30780
196 4 30880
197 4 30980
198 4 31080
199 4 31180
200 4 31280
201 4 31380
202 4 31480
203 4 35480
204 4 35580
205 4 35680
206 4 35780
207 4 35880
208 4 35980
209 4 30640
210 4 30740
211 4 30840
212 4 30940
213 4 31040
214 4 31140
215 4 31240
216 4 31340
217 4 31440
218 4 31540
219 4 35540
220 4 35640
221 4 35740
222 4 35840
223 4 35940
224 4 36040
225 4 30700
226 4 30800
227 4 30900
228 4 31000
229 4 31100
230 4 31200
231 4 31300
232 4 31400
233 4 31500
234 4 31600
235 4 35600
236 4 35700
237 4 35800
238 4 35900
239 4 36000
240 4 36100
241 4 30760
242 4 30860
243 4 30960
244 4 31060
245 4 31160
246 4 31260
247 4 31360
248 4 31460
249 4 31560
250 4 31660
251 4 35660
252 4 35760
253 4 35860
254 4 35960
255 4 36060
256 4 36160
257 4 28480
258 4 73360
259 4 136960
260 8 240120
261 8 265320
262 8 314172
263 12 557752
264 12 688064
265 12 627432
266 16 883456
267 16 999872
268 16 1163820
269 20 1422708
270 20 1481508
271 20 1595496
272 31 2431232
273 13 500640
===*/

// Test strings created using Python.  These are used as base and modified in
// various ways.
/*
for i in xrange(256):
	print(chr(i).encode('base64'))

txt = 'foo bar quux baz'
for i in xrange(16):
	print(txt[0:i].encode('base64'))
*/
var testStrings = [
    '',

    'AA==',
    'AQ==',
    'Ag==',
    'Aw==',
    'BA==',
    'BQ==',
    'Bg==',
    'Bw==',
    'CA==',
    'CQ==',
    'Cg==',
    'Cw==',
    'DA==',
    'DQ==',
    'Dg==',
    'Dw==',
    'EA==',
    'EQ==',
    'Eg==',
    'Ew==',
    'FA==',
    'FQ==',
    'Fg==',
    'Fw==',
    'GA==',
    'GQ==',
    'Gg==',
    'Gw==',
    'HA==',
    'HQ==',
    'Hg==',
    'Hw==',
    'IA==',
    'IQ==',
    'Ig==',
    'Iw==',
    'JA==',
    'JQ==',
    'Jg==',
    'Jw==',
    'KA==',
    'KQ==',
    'Kg==',
    'Kw==',
    'LA==',
    'LQ==',
    'Lg==',
    'Lw==',
    'MA==',
    'MQ==',
    'Mg==',
    'Mw==',
    'NA==',
    'NQ==',
    'Ng==',
    'Nw==',
    'OA==',
    'OQ==',
    'Og==',
    'Ow==',
    'PA==',
    'PQ==',
    'Pg==',
    'Pw==',
    'QA==',
    'QQ==',
    'Qg==',
    'Qw==',
    'RA==',
    'RQ==',
    'Rg==',
    'Rw==',
    'SA==',
    'SQ==',
    'Sg==',
    'Sw==',
    'TA==',
    'TQ==',
    'Tg==',
    'Tw==',
    'UA==',
    'UQ==',
    'Ug==',
    'Uw==',
    'VA==',
    'VQ==',
    'Vg==',
    'Vw==',
    'WA==',
    'WQ==',
    'Wg==',
    'Ww==',
    'XA==',
    'XQ==',
    'Xg==',
    'Xw==',
    'YA==',
    'YQ==',
    'Yg==',
    'Yw==',
    'ZA==',
    'ZQ==',
    'Zg==',
    'Zw==',
    'aA==',
    'aQ==',
    'ag==',
    'aw==',
    'bA==',
    'bQ==',
    'bg==',
    'bw==',
    'cA==',
    'cQ==',
    'cg==',
    'cw==',
    'dA==',
    'dQ==',
    'dg==',
    'dw==',
    'eA==',
    'eQ==',
    'eg==',
    'ew==',
    'fA==',
    'fQ==',
    'fg==',
    'fw==',
    'gA==',
    'gQ==',
    'gg==',
    'gw==',
    'hA==',
    'hQ==',
    'hg==',
    'hw==',
    'iA==',
    'iQ==',
    'ig==',
    'iw==',
    'jA==',
    'jQ==',
    'jg==',
    'jw==',
    'kA==',
    'kQ==',
    'kg==',
    'kw==',
    'lA==',
    'lQ==',
    'lg==',
    'lw==',
    'mA==',
    'mQ==',
    'mg==',
    'mw==',
    'nA==',
    'nQ==',
    'ng==',
    'nw==',
    'oA==',
    'oQ==',
    'og==',
    'ow==',
    'pA==',
    'pQ==',
    'pg==',
    'pw==',
    'qA==',
    'qQ==',
    'qg==',
    'qw==',
    'rA==',
    'rQ==',
    'rg==',
    'rw==',
    'sA==',
    'sQ==',
    'sg==',
    'sw==',
    'tA==',
    'tQ==',
    'tg==',
    'tw==',
    'uA==',
    'uQ==',
    'ug==',
    'uw==',
    'vA==',
    'vQ==',
    'vg==',
    'vw==',
    'wA==',
    'wQ==',
    'wg==',
    'ww==',
    'xA==',
    'xQ==',
    'xg==',
    'xw==',
    'yA==',
    'yQ==',
    'yg==',
    'yw==',
    'zA==',
    'zQ==',
    'zg==',
    'zw==',
    '0A==',
    '0Q==',
    '0g==',
    '0w==',
    '1A==',
    '1Q==',
    '1g==',
    '1w==',
    '2A==',
    '2Q==',
    '2g==',
    '2w==',
    '3A==',
    '3Q==',
    '3g==',
    '3w==',
    '4A==',
    '4Q==',
    '4g==',
    '4w==',
    '5A==',
    '5Q==',
    '5g==',
    '5w==',
    '6A==',
    '6Q==',
    '6g==',
    '6w==',
    '7A==',
    '7Q==',
    '7g==',
    '7w==',
    '8A==',
    '8Q==',
    '8g==',
    '8w==',
    '9A==',
    '9Q==',
    '9g==',
    '9w==',
    '+A==',
    '+Q==',
    '+g==',
    '+w==',
    '/A==',
    '/Q==',
    '/g==',
    '/w==',

    'Zg==',
    'Zm8=',
    'Zm9v',
    'Zm9vIA==',
    'Zm9vIGI=',
    'Zm9vIGJh',
    'Zm9vIGJhcg==',
    'Zm9vIGJhciA=',
    'Zm9vIGJhciBx',
    'Zm9vIGJhciBxdQ==',
    'Zm9vIGJhciBxdXU=',
    'Zm9vIGJhciBxdXV4',
    'Zm9vIGJhciBxdXV4IA==',
    'Zm9vIGJhciBxdXV4IGI=',
    'Zm9vIGJhciBxdXV4IGJh',

    // Manually added
    'Z m9 vI\n\nG\r\r\nJh\t\tciB\t\txdXV4IGJh',
    'Zm==Zm9=Zm9v\n'
];

function concatenateTest() {
    // Concatenate test strings
    var csum = 0;
    testStrings.forEach(function (s1) {
        testStrings.forEach(function (s2) {
            csum += checksumString(Duktape.enc('jx', Duktape.dec('base64', s1 + s2)));
        });
    });
    print(csum);
}

try {
    print('concatenate');
    concatenateTest();
} catch (e) {
    print(e.stack || e);
}

function whitespaceMutateTest() {
    var test = [].concat(testStrings);
    var i, j, buf;

    // mutated byte
    test.forEach(function (str, idx) {
        var tmp, csum = 0;
        for (i = 0; i < str.length; i++) {
            for (j = 0; j < 512; j++) {
                tmp = str.substring(0, i) + String.fromCharCode(j) + str.substring(i + 1);
                try {
                    csum += checksumString(Duktape.enc('jx', Duktape.dec('base64', tmp)));
                } catch (e) {
                    csum += checksumString('error at: ' + i + ', ' + j);
                }
            }
        }
        print(idx, str.length, csum);
    });

    // inserted whitespace
    test.forEach(function (str, idx) {
        var tmp, csum = 0;
        for (i = 0; i <= str.length; i++) {
            for (j = 0; j < 4; j++) {
                tmp = str.substring(0, i) + ' \r\n\t'[j] + str.substring(i);
                try {
                    csum += checksumString(Duktape.enc('jx', Duktape.dec('base64', tmp)));
                } catch (e) {
                    csum += checksumString('error at: ' + i + ', ' + j);
                }
            }
        }
        print(idx, str.length, csum);
    });
}

try {
    print('whitespace and mutate test');
    whitespaceMutateTest();
} catch (e) {
    print(e.stack || e);
}
