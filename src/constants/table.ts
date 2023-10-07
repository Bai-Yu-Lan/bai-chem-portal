/* eslint-disable max-len */
export const propertyData = [
    {
        smiles: 'CCC1=[O+][Cu-3]2([O+]=C(CC)C1)[O+]=C(CC)CC(CC)=[O+]2',
        activity: 'CI',
        HIV_activity: 0,
    },
    {
        smiles: 'C(=Cc1ccccc1)C1=[O+][Cu-3]2([O+]=C(C=Cc3ccccc3)CC(c3ccccc3)=[O+]2)[O+]=C(c2ccccc2)C1',
        activity: 'CI',
        HIV_activity: 0,
    },
    {
        smiles: 'CC(=O)N1c2ccccc2Sc2c1ccc1ccccc21',
        activity: 'CI',
        HIV_activity: 0,
    },
    {
        smiles: 'Nc1ccc(C=Cc2ccc(N)cc2S(=O)(=O)O)c(S(=O)(=O)O)c1',
        activity: 'CI',
        HIV_activity: 0,
    },
    {
        smiles: 'O=S(=O)(O)CCS(=O)(=O)O',
        activity: 'CI',
        HIV_activity: 0,
    },
    {
        smiles: 'CCOP(=O)(Nc1cccc(Cl)c1)OCC',
        activity: 'CI',
        HIV_activity: 0,
    },
    {
        smiles: 'NNP(=S)(NN)c1ccccc1',
        activity: 'CM',
        HIV_activity: 1,
    },
    {
        smiles: 'Cc1cc(-c2ccc(N=Nc3cc(S(=O)(=O)O)c4ccccc4c3N)c(C)c2)ccc1N=Nc1cc(S(=O)(=O)O)c2ccccc2c1N',
        activity: 'CA',
        HIV_activity: 1,
    },
    {
        smiles: 'O=S(=O)(O)c1cc2ccc1ccc1ccc(cc1S(=O)(=O)O)nnc1ccc(ccc3ccc(cc3S(=O)(=O)O)nn2)c(S(=O)(=O)O)c1',
        activity: 'CA',
        HIV_activity: 1,
    },
    {
        smiles: 'Nc1c(N=Nc2ccc(-c3ccc(N=Nc4cc(S(=O)(=O)O)c5ccccc5c4O)cc3)cc2)cc(S(=O)(=O)O)c2ccccc12',
        activity: 'CA',
        HIV_activity: 1,
    },
    {
        smiles: 'N=C(N)N.O=S(=O)(O)O',
        activity: 'CI',
        HIV_activity: 0,
    },
];

export const inverseData = [
    {
        id: 'US07928231B2',
        class: '5',
        reactants:
            '[C:12](=[O:13])([O:14][C:15]([CH3:16])([CH3:17][CH3:18])[O:27][C:25]([O:24][C:21]([CH3:20])([CH3:22])[CH3:23])=[O:26])',
        reagents:
            '[CH3:1][C:2](=[O:3])[c:4]1[cH:5][cH:6][c:7]2[c:8]([cH:9][cH:10][nH:11]2)[cH:19]1',
        production:
            '[CH3:1] [C:2](=[O:3])[c:4]1[cH:5][cH:6][c:7]2[c:8]([cH:9][cH:10][n:11]2[C:12](=[O:13])[O:14][C:15]([CH3:16])([CH3:17])[CH3:18])[cH:19]1',
    },
    {
        id: 'US20090192322A1',
        class: '5',
        reactants:
            '[C:13](=[O:14])([O:15][C:16]([CH3:17])([CH3:18][CH3:19])[O:35][C:33]([O:32][C:29]([CH3:28])([CH3:30])[CH3:31])=[O:34])',
        reagents:
            '[CH3:1][c:2]1[cH:3][cH:4][c:5] ([S:6](=[O:7])(=[O:8]) [O:9][C@@H:10]2[CH2:11][NH:12][C@H:20] 3[C@@H:21]2[O:22][CH2:23][C@@H:24]3[OH:25])[cH:26][cH:27]1',
        production:
            '[CH3:1][c:2]1[cH:3][cH:4][c:5] ([S:6](=[O:7])(=[O:8])[O:9] [C@@H:10]2[CH2:11][N:12]([C:13](=[O:14]) [O:15][C:16]([CH3:17])([CH3:18])[CH3:19]) [C@H:20]3[C@@H:21]2[O:22][CH2:23][C@@H:24]3[OH:25])[cH:26][cH:27]1',
    },
    {
        id: 'US20080146614A1',
        class: '10',
        reactants: '[Br:28][N:34]1[C:30](=[O:29])[CH2:31][CH2:32][C:33]1=[O:34]',
        reagents:
            '[CH3:1][CH2:2][O:3][C:4](=[O:5])[c:6]1[n:7][n:8] (-[c:9]2[cH:10][cH:11][c:12]([Cl:13])[cH:14][c:15]2[Cl:16]) [c:17](-[c:18]2[cH:19][cH:20][c:21]([O:22][CH3:23])[cH:24][cH:25]2)[c:26]1[CH3:27]',
        production:
            '[CH3:1][CH2:2][O:3][C:4](=[O:5]) [c:6]1[n:7][n:8](-[c:9]2[cH:10][cH:11][c:12]([Cl:13])[cH:14][c:15]2[Cl:16])[c:17] (-[c:18]2[cH:19][cH:20][c:21]([O:22][CH3:23])[cH:24][cH:25]2)[c:26]1[CH2:27][Br:28]',
    },
    {
        id: 'US20120207729A1',
        class: '5',
        reactants:
            '[CH3:1][C:2]([CH:3])([CH:4])[O:5][O:6](=[O:7])[O:36] [C:34]([O:33])[C:30]([CH3:29])([CH3:31][CH3:32])=[O:35]',
        reagents:
            '[NH2:8][c:9]1[n:10][c:11]2[c:12](-[c:13]3[cH:14][cH:15][cH:16][c:17]([N+:18](=[O:19]) [O-:20])[cH:21]3)[cH:22][c:23]([C:24]#[N:25])[cH:26][c:27]2[s:28]1',
        production:
            '[CH3:1][C:2]([CH3:3])([CH3:4])[O:5] [C:6](=[O:7])[NH:8][c:9]1[n:10][c:11]2[c:12] (-[c:13]3[cH:14][cH:15][cH:16][c:17]([N+:18](=[O:19]) [O-:20])[cH:21]3)[cH:22][c:23]([C:24]#[N:25])[cH:26][c:27]2[s:28]1',
    },
    {
        id: 'US20070003539A1',
        class: '5',
        reactants:
            '[NH2:3][CH2:4][C:5]1[CH:6][CH:7][CH:8][CH:9][C:10][S:11](=[O:12]) (=[O:13])(CH:14)1[CH2:15][CH2:16]1',
        reagents:
            '[O:1]=[C:2]([C:17]([F:18])([F:19])[F:20])[O:23] [C:22](=[O:21])[C:24]([F:25])([F:26])[F:27]',
        production:
            '[O:1]=[C:2]([NH:3][CH2:4][c:5]1[cH:6][cH:7][cH:8][cH:9] [c:10]1[S:11](=[O:12])(=[O:13])[CH:14]1 [CH2:15][CH2:16]1)[C:17]([F:18])([F:19])[F:20]',
    },
];

export const USPTO_Data = [
    {
        source: '"CC(=O)Oc1c(C(C)(C)C)cc2c(c1C(C)(C)C)CC(CCC(C)C)(CCC(C)C)02.C1CCOC1.O.[Al+3]. [Cl-].[H-].[H-].[H-].[H-].[Li+].[NH4+]>>"',
        target: '"CC(C)CCC1(CCC(C)C)Cc2cc(cc(C(C)(C)C)c(O)c2C(C)C)O1"',
    },
    {
        source: '"C[C@H]1C[C@@H] 1N.N#Cc1ccc(-c2cnn(-c3ccc(C(=O)O)cn3)c2O) cc1.CCN(C(C)C)C(C)C.CCN=C=NCCCN(C)C.CN(C)C=O.Cl.O.O.On1nnc2ccccc21>>',
        target: '"C[C@H]1C[C@@H]1NC(=O)c1ccc(-n2nccc(-c3ccc(C#N)cc3)c2O)nc1"',
    },
    {
        source: '"COc1cc2ncnc(Cl)c2cc10CCCN1CCOCC1.Nc1ccc(F)c(Cl)c1.co.Cl>>"',
        target: '"COc1cc2ncnc(Nc3ccc(F)c(Cl)c3)c2cc1OCCCN1CCOCC1"',
    },
    {
        source: '"C1NC2CC3CC1CC(C3)C2.O=C(Cl)c1ccc([N+](=O)[O-])cc1.ccO>>"',
        target: '"O=C(c1ccc([N+](=O)[O-])cc1)N1CC2CC3CC(C2)CC1C#"',
    },
    {
        source: '"COCOc1ccc(C2COc3cc(OCOC)ccc3C2CCCCCCCCCO)cc1.CS(=O)(=O)Cl.CCN(cC)cC.CICCl.O>>"',
        target: '"COCOc1ccc(C2COc3cc(OCOC)ccc3C2CCCCCCCCCOS(C)(=O)=O)cc1"',
    },
];

export const conditionData = [
    {
        Task: 'Reagents',
        'BLEU-2': '0.9909',
        'BLEU-4': '0.9885',
        'Rouge-1': '0.9976',
        'Rouge-2': '0.8944',
        'Rouge-L': '0.9976',
        ACC: '98.7%',
        Recall: '-',
        RMSE: '-',
        R2: '-',
        remark: '-',
    },
    // {
    //     Task: 'Catalysts',
    //     'BLEU-2': '0.629',
    //     'BLEU-4': '0.402',
    //     'Rouge-1': '0.722',
    //     'Rouge-2': '0.537',
    //     'Rouge-L': '0.722',
    //     ACC: '0.255',
    //     Recall: '-',
    //     RMSE: '-',
    //     R2: '-',
    //     remark: '711条',
    // },
    // {
    //     Task: 'Condition Geneartion',
    //     'BLEU-2': '0.092',
    //     'BLEU-4': '0.030',
    //     'Rouge-1': '0.234',
    //     'Rouge-2': '0.057',
    //     'Rouge-L': '0.227',
    //     ACC: '-',
    //     Recall: '-',
    //     RMSE: '-',
    //     R2: '-',
    //     remark: '737条',
    // },
    // {
    //     Task: 'Yields',
    //     'BLEU-2': '-',
    //     'BLEU-4': '-',
    //     'Rouge-1': '-',
    //     'Rouge-2': '-',
    //     'Rouge-L': '-',
    //     ACC: '0.7429',
    //     Recall: '0.9659',
    //     RMSE: '18.45',
    //     R2: '0.514',
    //     remark: '616条, -3% ～3%',
    // },
];

export const taskData = [
    {
        Instruction:
            'Considering a chemical reaction, SMILES is sequenced-based strings, used to encode the molecular structure, reactants for this reaction are CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1, SMILES for products of reactions are CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1, so the whole reaction can be represented as CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1>CO.[Na+].[OH-]>CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1, Based on your knowledge, what reagents or catalysts are likely to be found in this chemical reaction?',
        Input: 'CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1>>CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1',
        Output: 'CO.[Na+].[OH-]',
        Type: 'reagents',
    },
    {
        Instruction:
            'Considering a chemical reaction, SMILES is sequenced-based string used to encode the molecular structure. A chemical reaction includes reactants, conditions and products. Thus,reactants for this reaction are CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1, What product could potentially form from the reaction of the given reactants and reagents?',
        Input: 'CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1',
        Output: 'CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1',
        Type: 'products',
    },
    {
        Instruction:
            'Considering a chemical reaction, SMILES is sequenced-based string used to encode the molecular structure. A chemical reaction includes reactants, conditions and products. Thus, SMILES for products of reactions are CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1, Which reactants, in your estimation, could have given rise to the provided product?',
        Input: 'CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1',
        Output: 'CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1',
        Type: 'reagents',
    },
    {
        Instruction:
            'Considering a chemical reaction, SMILES is sequenced-based strings, used to encode the molecular structure, reactants for this reaction are CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1, SMILES for products of reactions are CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1, so the whole reaction can be represented as CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1>CO.[Na+].[OH-]>CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1, Can you classify this reaction as a chemical reaction?',
        Input: 'CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1>CO.[Na+].[OH-]>CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1',
        Output: '336',
        Type: 'classification',
    },
    {
        Instruction:
            'Considering a chemical reaction, SMILES is sequenced-based strings, used to encode the molecular structure, reactants for this reaction are CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1, SMILES for products of reactions are CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1, so the whole reaction can be represented as CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1>CO.[Na+].[OH-]>CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1, Can you estimate the reaction\'s yield based on the amount of reactants used?"',
        Input: 'CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)OCC)CC(=O)OCC)cc1>CO.[Na+].[OH-]>CCCCCCCCCCCCCCCCCCOc1ccc(C(=O)C(=O)N(CC(=O)O)CC(=O)O)cc1',
        Output: '94.8',
        Type: 'yield',
    },
];

export const reactData = [
    {
        model: 'Mol transformer',
        top1: '88.6%',
        top5: '94.2%',
        url: 'https://pubs.acs.org/doi/10.1021/acscentsci.9b00576',
        description: '2019',
    },
    {
        model: 'Aug Transformer',
        top1: '90%',
        top5: '95.4%',
        description: '2023',
    },
    {
        model: 'Chemformer',
        top1: '90.9%',
        top5: '93.8%',
        url: 'https://iopscience.iop.org/article/10.1088/2632-2153/ac3ffb/pdf',
        description: '2022',
    },
    {
        model: 'Chemformer-Large',
        top1: '91.3%',
        top5: '93.7%',
        url: 'https://iopscience.iop.org/article/10.1088/2632-2153/ac3ffb/pdf',
        description: '2022',
    },
    {
        model: 'Ours (BAI-Chem V1)',
        top1: '89.9%',
        top5: '-',
        description: '2023',
    },
    {
        model: 'Ours (BAI-Chem V2)',
        top1: '92.4%',
        top5: '-',
        description: '2023',
    },
];

export const inverseResultData = [
    {
        model: 'LocalRetro',
        top1: '53.4%',
        top3: '77.5%',
        url: 'https://pubs.acs.org/doi/epdf/10.1021/jacsau.1c00246',
        description: '2021',
    },
    {
        model: 'Graph2SMILES',
        top1: '52.0%',
        top3: '70.2%',
        url: 'https://arxiv.org/pdf/2110.09681.pdf',
        description: '2021',
    },
    {
        model: 'RetroFormer',
        top1: '53.2%',
        top3: '71.1%',
        url: 'https://arxiv.org/pdf/2201.12475.pdf',
        description: '2022',
    },
    {
        model: 'GTA',
        top1: '51.41%',
        top3: '67.6%',
        url: 'https://ojs.aaai.org/index.php/AAAI/article/view/16131',
        description: '2021',
    },
    {
        model: 'Dual',
        top1: '53.6%',
        top3: '70.7%',
        url: 'https://arxiv.org/pdf/2007.13437.pdf',
        description: '2021',
    },
    {
        model: 'GraphRetro',
        top1: '53.7%',
        top3: '68.3%',
        url: 'https://arxiv.org/abs/2006.07038',
        description: '2020',
    },
    {
        model: 'RetroPrime',
        top1: '51.4%',
        top3: '70.8%',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S1385894721014303',
        description: '2021',
    },
    {
        model: 'MEGAN',
        top1: '48.1%',
        top3: '70.7%',
        url: 'https://pubs.acs.org/doi/epdf/10.1021/acs.jcim.1c00537',
        description: '2021',
    },
    {
        model: 'RetroXpert',
        top1: '50.4%',
        top3: '61.1%',
        url: 'https://arxiv.org/abs/2011.02893',
        description: '2020',
    },
    {
        model: 'Chemformer',
        top1: '53.6%',
        top3: '-',
        url: 'https://iopscience.iop.org/article/10.1088/2632-2153/ac3ffb/pdf',
        description: '2022',
    },
    {
        model: 'Chemformer-Large',
        top1: '54.3%',
        top3: '-',
        url: 'https://iopscience.iop.org/article/10.1088/2632-2153/ac3ffb/pdf',
        description: '2022',
    },
    {
        model: 'Ours (BAI-Chem V1)',
        top1: '46%',
        top3: '-',
        description: '2023',
    },
    {
        model: 'Ours (BAI-Chem V2)',
        top1: '72.2%',
        top3: '-',
        description: '2023',
        bold: true,
    },
];
