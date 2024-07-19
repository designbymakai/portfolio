import React, { useState } from 'react';

export default function Photography() {
const Images = [
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/aa34e854-6bf9-4acf-a31e-2f17a90522cc_rw_1920.jpg?h=f0481855032b81506b378f9e083afedd",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/c2243ab1-dab0-4c00-95b8-ef8c265291b4_rw_1920.jpg?h=8f6ee7bef113a695b4e4abcbf56ebaa7",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/9a669065-c3bb-4ffc-bc49-6e08cb272b7e_rw_1920.jpg?h=49862d2df47a3772875fc636c54baecb",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/ab2d1b8c-0cc5-43e1-9924-51d035c8c774_rw_1920.jpg?h=7ca130ecf50ea367f4393abcea08d3f9",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/0d01eb14-0c7a-4415-b14d-f3e6874c5bb2_rw_1920.jpg?h=1fade11b3d6ec5008d161bcf1d5304d6",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/b3f3ffa8-3277-4638-81cc-00539788760b_rw_1920.jpg?h=0bdd672f2bad238a53cf8678fd3fd461",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/ea262673-7221-4aec-9608-762973668d64_rw_1920.jpg?h=93cc896abe54e6653538e7191b5ac200",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/6907f6a8-fdaf-4170-aa5d-3b46ee0b1745_rw_1920.jpg?h=7d2fa19ccfe2582f6d716aa9373c3e41",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/97542708-ee6a-4d59-b9b2-700fbb8714e8_rw_1920.jpg?h=20ac708d21953062050227e61a57fd25",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/0384addf-d818-4f83-93ae-a9f1408fbb13_rw_1920.jpg?h=664ca7adc19486caecdebb1a1802b852",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/b0f6a3b1-e332-41a1-8cec-e675476c3790_rw_1920.jpg?h=5853600def9b2a84e9678d6def644415",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/eda9f0ab-eccf-41e1-b862-cc8b2be33898_rw_1920.jpg?h=e97de0da2d1c27ad678437e7a263cfb8",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/8a8efb43-4833-428c-b544-bf0f9278224f_rw_1920.jpg?h=42edad277d45e8377fe15ab537f41bc4",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/20be258f-f60f-4670-8c73-bb432401a12b_rw_1920.jpg?h=08eba5337608d566b8b3b3cfbb51791a",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/4e9dfb57-e0c0-45f2-bc86-bba83e1cbbd7_rw_1920.jpg?h=ad3525acee8309fbad00029a9934d970",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/4c5aaa28-4094-49dc-97d5-c165396e071d_rw_1920.jpg?h=3c400ae525c6347b7a8c1b3b9efaaa78",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/8ecb4fc3-1a0e-469b-aa6c-b5ec19480b21_rw_1920.jpg?h=9e493bd72e9854c7a75c6bec19cffed8",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/193065b0-1dc7-48df-bbeb-2f7eb5aadbd4_rw_1920.jpg?h=6c9dfb693339b9fe8fe70c064e3ca4f9",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/40c146d5-3389-4081-9b9c-b58e80d5f15b_rw_1920.jpg?h=2b15519a987517e52da71e9a6cb4d50f",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/cf140a76-8c22-431c-bb5f-dd0d13c51204_rw_1920.jpg?h=61992fca2b5f678961ba65b371eb01c0",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/d4d4d457-6da7-4a3f-9e41-6ec8058281e9_rw_1920.jpg?h=2561ae3d451d3dd95c5c0d9a3c66c512",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/30afd154-bd6f-499a-a495-fdaca7ee59fb_rw_1920.jpg?h=ed7a838ef4e71b72e409d5c1a358123d",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/08ed3f8f-229f-49d0-a32b-8189f41f930c_rw_1920.jpg?h=538b840a930d6d06cb56ebfe5ba06e2e",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/ca2b510e-e654-4f5e-a719-f5a8c4372f02_rw_1920.jpg?h=527eaf1eda4d220f2359d41e4059549c",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/b792343a-eb4c-418b-b3ca-b9f2032ee356_rw_1920.jpg?h=4dca6ecf302ee77066ac6fa8aef4cdda",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/1c568ace-c103-4338-8973-9d2acc48ed95_rw_1920.jpg?h=a47961f8d3e8bcb718eeb64a91a07740",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/d4fc6985-ea3b-4d8a-bdad-8fbdf20d583b_rw_1920.jpg?h=d16ce52b8a4244b06fbf89f463a32988",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/541c3df1-68cf-4916-9471-b9bc1d76a655_rw_1920.jpg?h=18bca24f5f42988a99cb149a97ced017",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/4c71e194-e736-4353-afe7-e83243dda953_rw_1920.jpg?h=d9c2618dd74124eabacce76ae66ec50c",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/6039425c-55b5-46e1-b6c4-0845826e6a9a_rw_1920.jpg?h=e24a9948af3d268f1c5e3164e39812a4",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/b9dd50c5-4c94-4abc-b662-04eae445bdd0_rw_1920.jpg?h=8b6b75790f16e4bdc8cf5b7b114d8eb0",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/7a24f9fb-66db-4f4c-a5f6-a72ea0f8fd53_rw_1920.jpg?h=56c54edaa207516c1900833b62dfaa46",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/b60d7723-6582-4b63-96bd-1ab96dd2ac94_rw_1920.jpg?h=e3ed3e907f993221b53a7e63a251d0fc",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/f2e95b78-570a-42c1-98b7-f6af84e16a87_rw_1920.jpg?h=b08e297aa7d95eac0070f49d17cb9029",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/a1307f58-d418-477f-b1f4-3675edb16435_rw_1920.jpg?h=f612153cd5c9931dd6ee86793dfc78eb",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/8ecf1da6-5f5b-4075-a8f1-a366e3dabc44_rw_1920.jpg?h=868ea184276131c6f4d01589dffb8393",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/41647667-4e52-4f68-8d17-91c344152e2f_rw_1920.jpg?h=71d954cbd3779cddc3dc9caab4420a5b",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/ec75d08c-cbf6-4678-a3cb-8bb5515111d4_rw_1920.jpg?h=f44a4146c3cd339f74a674b47efb527b",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/d8e33f25-66c5-4858-a97e-ffc45a298460_rw_1920.jpg?h=57ac47713d76ec2680a856eee15a94de",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/030cd079-d125-4eca-b5f4-a89b024163cc_rw_1920.jpg?h=4692532683bd0d41c98649acc3e104d2",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/39c53395-0a33-42d0-9d19-c7117b087d53_rw_1920.jpg?h=2c4b887cf5c0cb9edf1dcce746178dcb",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/607c2b84-6962-434d-95b4-e1bd1a6dbb50_rw_1920.jpg?h=b8d236419909636123c870220c527945",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/b2a93e2b-caa2-4c57-ad6e-b8d9f46b5bca_rw_1920.jpg?h=4a0427251ad58a1db04e08507adeeb93",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/6173fa99-2a4c-44ae-bf6c-ee2a431b533a_rw_1920.jpg?h=7a498b7ceb8906e934aeb0912e1cf183",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/1d96674e-7a1b-4450-8e3b-c4fec05f98f9_rw_1920.jpg?h=5fca670d1bd8602b014ea5454ef8d15c",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/c5831476-8744-489f-8a68-c423655ef949_rw_1920.jpg?h=01d84f98d3113e39d18c4b9ebf3aba17",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/80c8ab57-e08a-4935-ab16-86e5afa52df9_rw_1920.jpg?h=094ab0312d600183ba40a3c21984eeac",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/4c028806-8303-47f1-8475-95aef86578f1_rw_1920.jpg?h=9dc71f4a85b4ec00fd8c34432d077ae0",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/fbeb1147-b34a-4e35-94a2-1e490fdc7232_rw_1920.jpg?h=62f68d358a08917aa59f0ebd97094602",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/1627a4d8-ffb2-4127-9d96-f857d8ac77ad_rw_1920.jpg?h=de483df90985e124a2082ad44c23ae80",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/6998a061-2bac-466c-be4e-30e5af17c393_rw_1920.jpg?h=67be2ff7d615194f66f1a6a1e647285c",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/729ce3d2-c484-4487-a08f-4ae014864644_rw_1920.jpg?h=21fc4667e43e4da6ea1a40b5a9550920",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/3784577b-c6b2-4f24-b996-d1aac2a429a4_rw_1920.jpg?h=7ad566adc987d9dd30e62136ac8b5a6f",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/90f955ef-0e1d-4e0b-a915-4932730daf5f_rw_1920.jpg?h=b7f622e23e19bca8003af7207bc95645",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/acbf2f7f-16e2-41e1-bd06-0927c7b5dced_rw_1920.jpg?h=dfacd51f24f0836a11a97d809ce56f76",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/6e7cc6d3-de7a-41e5-b61b-d59ca9af5efa_rw_1920.jpg?h=7ec51b8c0231df8984b4223d2df56311",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/8dbcbc83-272d-4112-90e6-329f0e81cc1d_rw_1920.jpg?h=8ac024b6c23b860971dc6fbb12f38867",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/63e6ad7f-3ef3-4623-8aed-e6d6c0fd62d5_rw_1920.jpg?h=e89193280a5715a3ecba502955eb3841",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/1c6ccafa-fe16-4b7a-8ab8-1000906883cc_rw_1920.jpg?h=b2ff7ed276a4e03a964e17b1d659fb70",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/7f2344a6-afc5-4f0c-8828-c127f3134919_rw_1920.jpg?h=f9c34019f3223901779cc5cf612266af",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/ed449c61-5d35-4c81-b33c-cc32cbe78bca_rw_1920.jpg?h=3e953753e93ee7fe1cc7f86487fe4f2e",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/75c5eaf6-90f5-43a9-ab15-dffb099a48a5_rw_1920.jpg?h=1c0d6ebe6c3e3d243e5f206f1afd8624",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/455f8820-39f4-4407-9c56-a63288a2031b_rw_1920.jpg?h=af93c616cad4c29aaab350b6fe440bf4",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/b765bcbe-9337-4211-9956-43e7cd9ed03e_rw_1920.jpg?h=197482e81a5b312007d19f69ea711ca7",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/fe97fe71-bb3a-48b8-9859-6e33703faff8_rw_1920.jpg?h=890f4e5390174aa01c38a4ac86333934",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/fd5cac0c-7de5-41c4-af8c-6c411c6b6c53_rw_1920.jpg?h=fac037adfa8b2068540fd1dc4cf7b2e0",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/a24f4227-7a27-4ffb-9d0b-9490f16f5091_rw_1920.jpg?h=898eeab88f98cf9baaa70c8852aef3c9",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/6861a6d1-96b6-4b28-a633-3d89b37e3b07_rw_1920.jpg?h=0baa9646c1732fa45cde4efa5132f2d7",
    "https://cdn.myportfolio.com/5f6252d5-893e-4046-b2b0-9061d1c3bbd3/098f3633-00b1-4501-be68-f027ecbbcda6_rw_1920.jpg?h=98412dad3ffe8485532ecc92d3186134",
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const imagesPerPage = 8;
    const totalPages = Math.ceil(Images.length / imagesPerPage);
  
    const startIndex = currentPage * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = Images.slice(startIndex, endIndex);
  
    const goToNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };
  
    const goToPreviousPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };
  
    return (
      <section className="">
        <div className="container px-5 py-6 mx-auto rounded-t">
          <div className="flex flex-col text-center w-full mb-20">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have always been a fan of photography and it is my favourite hobby. Here are some of my favourite shots.
            </p>
            <div className="flex justify-center mt-4">
            <button onClick={goToPreviousPage} disabled={currentPage === 0} className='bg-dbm-pr-200 mr-1 focus:ring text-dmb-w'>Previous</button>
            <button onClick={goToNextPage} disabled={currentPage === totalPages - 1} className='bg-dbm-pr-200 ml-1 focus:ring text-dbm-w'>Next</button>
          </div>
          </div>
          <div className="container mx-auto">
            <div className="-m-1 flex flex-wrap md:-m-2">
              {currentImages.map((image, index) => (
                <div key={index} className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2">
                  <img className="block mx-auto h-full object-cover object-center rounded-lg shadow-md hover:scale-150" src={image}/>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    );
  }