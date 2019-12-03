import Vue from "vue";
import Router from "vue-router";

// Page content
import ServiceRequests from "@/components/request/ServiceRequests";
import Catalog from "@/components/catalog/Catalog";
import CatalogSection from "@/components/catalog/CatalogSection";
import CatalogDetail from "@/components/catalog/CatalogDetail";
import Request from "@/components/request/Request";
import RequestDone from "@/components/request/RequestDone";
import NewRequest from "@/components/request/NewRequest";
import NewRequestEquipment from "@/components/catalog/NewRequestEquipment";
import SuccessSendForm from "@/components/modal/SuccessSendForm";
import Search from "@/components/search/Search";
import SearchNoResult from "@/components/search/SearchNoResult";
import SearchItemResult from "@/components/search/SearchItemResult";
import SearchItemsResult from "@/components/search/SearchItemsResult";
import Basket from "@/components/basket/Basket";
import BasketEmpty from "@/components/basket/BasketEmpty";
import Teaching from "@/components/teaching/Teaching";
import Registration_1 from "@/components/teaching/TrainingRegistration_1";
import Registration_2 from "@/components/teaching/TrainingRegistration_2";
import Registration_3 from "@/components/teaching/TrainingRegistration_3";
import Registration_4 from "@/components/teaching/TrainingRegistration_4";
import Registration_5 from "@/components/teaching/TrainingRegistration_5";
import SuccessTraining from "@/components/modal/SuccessTraining";
import SelectingCity from "@/components/teaching/SelectingCity";
import QR from "@/components/teaching/qrCode";
import Teachers from "@/components/teaching/Teachers";
import TeacherDetail from "@/components/teaching/TeacherDetail";
import TrainingRequestsList from "@/components/teaching/TrainingRequestsList";
import TrainingRequestDetail from "@/components/teaching/TrainingRequestDetail";
import Personal from "@/components/profile/Personal";
import PersonalForm from "@/components/profile/PersonalForm";
import PersonalPassword from "@/components/profile/PersonalPassword";
import Settings from "@/components/settings/Settings";
import SettingsFont from "@/components/settings/SettingsFont";
import SettingsLang from "@/components/settings/SettingsLang";
import Home from "@/components/Home";
import Modal from "@/components/modal/Modal";

// Fallback page
import PageNotFound from "@/components/PageNotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Catalog",
      name: "Machines Catalog",
      component: Catalog
    },
    {
      path: "/CatalogSection",
      name: "Catalog Section",
      component: CatalogSection
    },
    {
      path: "/CatalogDetail",
      name: "Catalog Detail",
      component: CatalogDetail
    },
    {
      path: "/ServiceRequests",
      name: "Service Requests",
      component: ServiceRequests
    },

    {
      path: "/RequestDone",
      name: "Request Done",
      component: RequestDone
    },
    {
      path: "/Request",
      name: "Request",
      component: Request
    },
    {
      path: "/NewRequest",
      name: "NewRequest",
      component: NewRequest
    },
    {
      path: "/NewRequestEquipment",
      name: "New Request Equipment",
      component: NewRequestEquipment
    },
    {
      path: "/SuccessSendForm",
      name: "Success Send Form",
      component: SuccessSendForm
    },
    {
      path: "/Search",
      name: "Search",
      component: Search
    },
    {
      path: "/SearchNoResult",
      name: "Search No Result",
      component: SearchNoResult
    },
    {
      path: "/SearchItemResult",
      name: "Search Item Result",
      component: SearchItemResult
    },
    {
      path: "/SearchItemsResult",
      name: "Search Items Result",
      component: SearchItemsResult
    },
    {
      path: "/Basket",
      name: "Basket",
      component: Basket
    },
    {
      path: "/BasketEmpty",
      name: "Basket Empty",
      component: BasketEmpty
    },
    {
      path: "/Teaching",
      name: "Teaching",
      component: Teaching
    },
    {
      path: "/TrainingRegistration_1",
      name: "Training registration step #1",
      component: Registration_1
    },
    {
      path: "/TrainingRegistration_2",
      name: "Training registration step #2",
      component: Registration_2
    },
    {
      path: "/TrainingRegistration_3",
      name: "Training registration step #3",
      component: Registration_3
    },
    {
      path: "/TrainingRegistration_4",
      name: "Training registration step #4",
      component: Registration_4
    },
    {
      path: "/TrainingRegistration_5",
      name: "Training registration step #5",
      component: Registration_5
    },
    {
      path: "/SuccessTraining",
      name: "Success Training",
      component: SuccessTraining
    },
    {
      path: "/SelectingCity",
      name: "Selecting City",
      component: SelectingCity
    },

    {
      path: "/qrCode",
      name: "QR code",
      component: QR
    },
    {
      path: "/Teachers",
      name: "Teachers list",
      component: Teachers
    },
    {
      path: "/TeacherDetail",
      name: "Teacher detail",
      component: TeacherDetail
    },
    {
      path: "/TrainingRequestsList",
      name: "Training requests list",
      component: TrainingRequestsList
    },
    {
      path: "/TrainingRequestDetail",
      name: "Training request detail",
      component: TrainingRequestDetail
    },
    {
      path: "/Personal",
      name: "Personal",
      component: Personal
    },
    {
      path: "/PersonalForm",
      name: "Personal Form",
      component: PersonalForm
    },
    {
      path: "/PersonalPassword",
      name: "Personal Password",
      component: PersonalPassword
    },
    {
      path: "/Settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/SettingsFont",
      name: "Settings Font",
      component: SettingsFont
    },
    {
      path: "/SettingsLang",
      name: "Settings Lang",
      component: SettingsLang
    },
    {
      path: "/modal",
      name: "Modal pge",
      component: Modal
    },
    {
      path: "**",
      name: "PageNotFound",
      component: PageNotFound
    }
  ]
});
